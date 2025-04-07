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
    const result = await userService.getUserById(+id);
    if(result.status == 'error'){
        res.send(result.message)
    }
    else{
        res.json(result.data)
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
async function deleteCommentById(req: Request, res: Response){
    const id = Number(req.params.id)
    const comment = await userService.deleteCommentById(id)

    if (comment.status === 'error') {
        res.send("bebebe")
    } else {
        res.json(comment.message)
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

export async function AddFavouriteFilm(req: Request, res: Response) {
    const data = req.body
    const result = await userService.AddFavouriteFilm(data.userId, data.filmId);
    res.json(result);
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

async function aboutUser(req: Request, res: Response){
    const id = res.locals.userId
    const result = await userService.getUserById(id)
    res.json(result)
}


const userController = {
    authorisateUser,
    registrateUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    deleteCommentById,
    aboutUser,
    AddFavouriteFilm
}

export default userController