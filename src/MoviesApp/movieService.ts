import { Prisma } from '@prisma/client'
import {movieRepository} from "./movieRepository"


type IMovie = Prisma.MovieGetPayload<{}>

interface IMovieError{
    status: 'error',
    message: string
}

interface IMoviesSuccess{
    status: 'success',
    data: Prisma.MovieGetPayload<{}>[]
}

interface IMovieSuccess{
    status: 'success',
    data: Prisma.MovieGetPayload<{}>
}

type IGenre = Prisma.GenreGetPayload<{}>

interface IGenreError{
    status: 'error',
    message: string
}

interface IGenresSuccess{
    status: 'success',
    data: IGenre[]
}

interface IGenreSuccess{
    status: 'success',
    data: IGenre
}

interface IComment{
    author: string
    text: string
    commentId: number
}


async function getMovies() : Promise< IMoviesSuccess | IMovieError >{
    const movies = await movieRepository.getMovies()

    if (!movies){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: movies}
}

async function getMovieById(id: number) : Promise< IMovieSuccess | IMovieError >{

    const movie = await movieRepository.getMovieById(id)
    

    if (!movie){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: movie}
}

async function getAllGenres() : Promise< IGenresSuccess | IGenreError >{
    const genre = await movieRepository.getAllGenres()

        if (!genre){
            return {status: 'error', message: 'genre not found'};
        }
      
        return {status: 'success', data: genre}
    }
    
   
const movieService = {
    getMovies: getMovies,
    getMovieById: getMovieById,
    getAllGenres: getAllGenres,
};

export {movieService}

