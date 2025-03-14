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

const genreController = {
    getAllGenres
}


export {genreController}