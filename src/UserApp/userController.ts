import { Request, Response } from 'express'
import userService  from './userService'
import { User } from '@prisma/client';


async function getUsers(req: Request, res: Response){
    const context = await userService.getUsers();
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function getUserById(req: Request, res: Response){
    let id = req.params.id
    const user = await userService.getUserById(+id);
    if(user.status == 'error'){
        res.send('error')
    }
    else{
        res.json(user.data)
    }
}

async function deleteUserById(req: Request, res: Response){
    const id = Number(req.params.id)
    const user = await userService.deleteUserById(id)

    if (user.status === 'error') {
        res.send("error")
    } else {
        res.json(user.data)
    }
}

async function updateUserById(req: Request, res: Response){
    let id = +req.params.id
    let data = req.body
    console.log(data)
    const user = await userService.updateUserById(data, id);
    if(user.status == 'error'){
        res.send('error')
    }
    else{
        res.json(user.data)
    }
}

async function registrateUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.registration(data)
    res.json(result)
}

async function authorisateUser (req: Request, res: Response){
    const data = req.body
    const result = await userService.login(data.email, data.password)
    res.json(result)
}


const userController = {
    authorisateUser,
    registrateUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}

export default userController