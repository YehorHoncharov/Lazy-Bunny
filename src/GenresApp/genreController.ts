import { IOkWithData } from './../types/types';
import { Request, Response } from 'express'
import { genreService } from './genreService'

async function getAllGenres(req: Request, res: Response){
    const context = await genreService.getAllGenres();
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function addGenre(req: Request, res: Response){
    let body = req.body
    const context = await genreService.addGenre(body)
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function updateGenre(req: Request, res: Response){
    let body = req.body
    let id = req.params.id
    const context = await genreService.updateGenre(body, +id)
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function deleteGenre(req: Request, res: Response){
    let id = req.params.id
    const context = await genreService.deleteGenre(+id)
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

const genreController = {
    getAllGenres,
    addGenre,
    updateGenre,
    deleteGenre
}


export {genreController}