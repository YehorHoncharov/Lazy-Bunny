import userRepository from "./userRepository"
import { User, CreateUser, UserWithOther, UpdateUser } from "./types"
import { IOkWithData ,IError } from "../types/types"
import { hash , compare } from "bcryptjs"
import { SECRET_KEY } from "../config/token";
import { sign } from "jsonwebtoken";


async function updateUserById(data: UpdateUser, id: number): Promise<IOkWithData<User> | IError> {

    let updateData = data

    if (updateData) {
        const hashedPassword = await hash(String(data.password), 10);
        updateData = {...updateData, password: hashedPassword}
    }

    const user = await userRepository.updateUserById(updateData, id);

    if (!user) {
        return { status: 'error', message: "User doesn't update" };
    }

    return { status: 'success', data: user };
}

async function deleteUserById(id: number): Promise<IOkWithData<User> | IError> {
    const user = await userRepository.deleteUserById(id)

    if (!user) {
        return { status: 'error', message: 'User not found' }
    }

    return { status: 'success', data: user }

}

async function getUsers() : Promise<IOkWithData<User[]> | IError >{
    const users = await userRepository.getUsers()

    if (!users) {
        return { status: 'error', message: 'No users found' }
    }

    return { status: 'success', data: users }
}

async function getUserById(id: number) : Promise< IOkWithData<User> | IError >{

    const user = await userRepository.getUserById(id)
    
    if (!user){
        return {status: 'error', message: 'user not found'}
    }
  
    return {status: 'success', data: user}
}

async function login(password: string, email: string): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        return { status: "error", message: "User not users" };
    }
    if (typeof user === "string") {
        return { status: "error", message: user };
    }
    const isMatch = await compare(password, user.password)

    if (!isMatch) {
        return { status: "error", message: "Passwords didn`t match" };
    }

    const token = sign(String(user.id), SECRET_KEY, { expiresIn: "1d" })

    return { status: "success", data: token };
}

async function registration(userData: CreateUser): Promise<IOkWithData<string> | IError> {
    const user = await userRepository.findUserByEmail(userData.email);
        
    if (!user) {
        return {status: "error", message: "user not found" };
    }

    if (typeof user === "string") {
        return { status: "error", message: user };
    }

    const hashedPassword = await hash(userData.password, 10)
    
    const hashedUserData = {
        ...userData ,
        password: hashedPassword
    }

    const newUser = await userRepository.createUser(hashedUserData);
    if (typeof newUser === "string") {
        return { status: "error", message: newUser };
    }

    if (!newUser) {
        return { status: "error", message: "User is not user" };
    }

    const token = sign(String(newUser.id), SECRET_KEY, { expiresIn: "1d" })

    return { status: "success", data: token };
}

const userService = {
    login: login,
    registration: registration,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}

export default userService