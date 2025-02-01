import { Request, Response } from 'express'
import { movieService } from './movieService'
// import { getAllGenres as getAllGenresService, getMovieById as getMovieByIdService, getMovie as getMovieService } from './movieService'


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

// async function getAllGenres(res: Response, req: Request){
//     const context = await movieService.getAllGenres()
//     if(context.status == 'error'){
//         res.send('error')
//     }
//     else{
//         res.render('genres', context);
// }
// }
    
const movieController = {
    getMovies:getMovies,
    getMovieById:getMovieById,
    // getAllGenres:getAllGenres,
};


export {movieController}