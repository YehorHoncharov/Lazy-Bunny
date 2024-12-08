import { Prisma } from '@prisma/client'
import {movieRepository} from "./movieRepository"


interface IMovie{
    id:   number
    name: string
    rating: number
    year: number
    language: string
    country: string
    ageRating: number
}

interface IMovieError{
    status: 'error',
    message: string
}

interface IMoviesSuccess{
    status: 'success',
    data: IMovie[]
}

interface IMovieSuccess{
    status: 'success',
    data: IMovie
}

interface IGenre{
    id:   number
    name: string
    description: string
}

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

