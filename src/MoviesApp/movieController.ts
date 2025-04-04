import { Request, Response } from 'express'
import { movieService } from './movieService'


async function getMovies(req: Request, res: Response){
    const context = await movieService.getMovies();
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
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

async function addMovie(req: Request, res: Response) {
    let newMovie = req.body
    const context = await movieService.addMovie(
        newMovie.Name, 
        newMovie.ReleaseDate, 
        newMovie.Year, 
        newMovie.Country, 
        newMovie.Director, 
        newMovie.Duration, 
        newMovie.Screenwriter, 
        newMovie.Description, 
        newMovie.Language, 
        newMovie.FilmCompany, 
        newMovie.Img, 
        newMovie.Rating,
        newMovie.Baner,
        newMovie.Mood,
        newMovie.Moments || [],
        newMovie.Url
    )
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function updateMovie(req: Request, res: Response){
    let body = req.body
    let id = req.params.id
    const context = await movieService.updateMovie(body, +id)
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function deleteMovie(req: Request, res: Response){
    let id = req.params.id
    const context = await movieService.deleteMovie(+id)
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

async function createComment(req: Request, res: Response){
    const data = req.body
    const result = await movieService.createComment(data)
    res.json(result)
}

const movieController = {
    getMovies:getMovies,
    getMovieById:getMovieById,
    getActorById:getActorById,
    deleteMovie:deleteMovie,
    updateMovie:updateMovie,
    addMovie:addMovie,
    createComment:createComment
};


export {movieController}