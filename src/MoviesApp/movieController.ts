import { Request, Response } from 'express'
import { movieService } from './movieService'


async function getMovies(req: Request, res: Response){
    const context = await movieService.getMovies();
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
        // res.render('movies', {movies: context.data});

    }
    
}

async function getMovieById(req: Request, res: Response){
    let id = req.params.id
    const movie = await movieService.getMovieById(+id);
    if(movie.status == 'error'){
        res.send('error')
    }
    else{
        res.json(movie.data)
    }

}

async function getActorById(req: Request, res: Response){
    let id = req.params.id
    const actor = await movieService.getActorById(+id);
    if(actor.status == 'error'){
        res.send('error')
    }
    else{
        res.json(actor.data)
    }
}
    
const movieController = {
    getMovies:getMovies,
    getMovieById:getMovieById,
    getActorById:getActorById,
};


export {movieController}