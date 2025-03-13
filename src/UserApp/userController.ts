import { Request, Response } from 'express'
import userService  from './userService'

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
    registrateUser
}

export default userController