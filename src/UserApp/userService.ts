import userRepository from "./userRepository";
import { User, CreateUser, UserWithOther, UpdateUser } from "./types";
import { IOkWithData, IError, IOk } from "../types/types";
import { hash, compare } from "bcryptjs";
import { SECRET_KEY } from "../config/token";
import { sign } from "jsonwebtoken";
import * as yup from 'yup';
import { movieRepository } from "../MoviesApp/movieRepository";

// // Схемы валидации
// const registrationSchema = yup.object().shape({
//   email: yup.string().email('Некорректный email').required('Email обязателен'),
//   password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
// });

// const loginSchema = yup.object().shape({
//   email: yup.string().email('Некорректный email').required('Email обязателен'),
//   password: yup.string().required('Пароль обязателен'),
// });

// const updateUserSchema = yup.object().shape({
//   email: yup.string().email('Некорректный email'),
//   password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов'),
// });

async function updateUserById(data: UpdateUser, id: number): Promise<IOkWithData<UpdateUser> | IError> {
  try {
    // Валидация данных
    // await updateUserSchema.validate(data, { abortEarly: false });

    let updateData = data;

    if (updateData.password) {
      const hashedPassword = await hash(String(data.password), 10);
      updateData = { ...updateData, password: hashedPassword };
    }

    const user = await userRepository.updateUserById(updateData, id);

    if (!user) {
      return { status: 'error', message: "User doesn't update" };
    }

    return { status: 'success', data: user };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return { status: 'error', message: err.errors.join(', ') };
    }
    return { status: 'error', message: 'Internal server error' };
  }
}

export async function AddFavouriteFilm(userId: number, filmId: number): Promise<IOkWithData<User> | IError> {
  try {
    const result = await userRepository.addMovieToFavourites(userId, filmId);
    
    return {
      status: 'success',
      data: result
    };

  } catch (error) {
    console.error('Помилка в AddFavouriteFilm:', error);
    
    if (error instanceof Error) {
      return { 
        status: 'error', 
        message: error.message || 'Внутрішня помилка сервера' 
      };
    }
    
    return { 
      status: 'error', 
      message: 'Невідома помилка' 
    };
  }
}


async function deleteUserById(id: number): Promise<IOkWithData<User> | IError> {
  const user = await userRepository.deleteUserById(id);

  if (!user) {
    return { status: 'error', message: 'User not found' };
  }

  return { status: 'success', data: user };
}

async function deleteCommentById(id: number): Promise<IOk | IError> {
  const comment = await userRepository.deleteCommentById(id);

  if (!comment) {
    return { status: 'error', message: 'Comment not found' };
  }

  return { status: 'success', message: "success delete" };
}

async function getUsers(): Promise<IOkWithData<User[]> | IError> {
  const users = await userRepository.getUsers();

  if (!users) {
    return { status: 'error', message: 'No users found' };
  }

  return { status: 'success', data: users };
}

async function getUserById(id: number): Promise<IOkWithData<User> | IError> {
  const user = await userRepository.findUserById(id);

  if (!user) {
    return { status: 'error', message: 'user not found' };
  }

  return { status: 'success', data: user };
}

async function login(email: string, password: string): Promise<IOkWithData<string> | IError> {
  try {

    // await loginSchema.validate({ email, password }, { abortEarly: false });
    // return {}
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      return { status: "error", message: "User not found" };
    }
    if (typeof user === "string") {
      return { status: "error", message: user };
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return { status: "error", message: "Passwords didn`t match" };
    }

    const token = sign({id: user.id}, SECRET_KEY, { expiresIn: "7d" });

    return { status: "success", data: token };
  } catch (err) {
    if (err instanceof Error) {
      return { status: "error", message: err.message};
    }
    return { status: "error", message: "Internal server error" };
  }
}

async function registration(userData: CreateUser): Promise<IOkWithData<string> | IError> {
  try {

    // await registrationSchema.validate(userData, { abortEarly: false });

    const user = await userRepository.findUserByEmail(userData.email);

    if (user) {
      return { status: "error", message: "User already exists" };
    }

    const hashedPassword = await hash(userData.password, 10);

    const hashedUserData = {
      ...userData,
      password: hashedPassword,
    };

    const newUser = await userRepository.createUser(hashedUserData);

    if (!newUser) {
      return { status: "error", message: "User is not created" };
    }

    const token = sign({id: newUser.id}, SECRET_KEY, { expiresIn: "1d" });

    return { status: "success", data: token };
  } catch (err) {
    if (err instanceof Error) {
      return { status: "error", message: err.message };
    }
    return { status: "error", message: "An unknown error occurred" };
    // if (err instanceof yup.ValidationError) {
    //   return { status: "error", message: err.errors.join(', ') };
    // }
    // return { status: "error", message: "Internal server error" };
  }
}

const userService = {
  login,
  registration,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  deleteCommentById,
  AddFavouriteFilm
};

export default userService;