import { Prisma } from '@prisma/client'
import {movieRepository} from "./movieRepository"
import { IError, IOkWithData } from '../types/types'
import { IUpdateMovie, Movie, MovieWithGenres } from './types'



type IGenre = Prisma.GenreGetPayload<{}>
type IActor= Prisma.ActorGetPayload<{}>
type IComment= Prisma.CommentGetPayload<{}>


async function getMovies(): Promise<IOkWithData<MovieWithGenres[]> | IError >{
    const movies = await movieRepository.getMovies()

    const filterMovies = movies?.map((movie) =>{
        const filteredGenres = movie.Genres.map((genre) =>{
            return genre.Genre
        })
        const filteredActors = movie.Actors.map((actor) =>{
            return actor.Actor
        })
       
        return {
            ...movie,
        }
        
    })

    if (!filterMovies){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: filterMovies}
}

async function getMovieById(id: number) : Promise< IOkWithData<MovieWithGenres> | IError >{

    const movie = await movieRepository.getMovieById(id)
    
    if (!movie){
        return {status: 'error', message: 'movies not found'}
    }
    const filteredGenres = movie?.Genres.map((genre) =>{
        return genre.Genre
    })
    const filteredActors = movie?.Actors.map((actor) =>{
        return actor.Actor
    })

    const filteredMovie = 
    {
        ...movie,
    }

    if (!filteredMovie){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: filteredMovie}
}


async function addMovie(Name: string, 
                        ReleaseDate: string,
                        Year: number, 
                        Country: string, 
                        Director: string, 
                        Duration: string,
                        Screenwriter: string,
                        Description: string,
                        Language: string,
                        FilmCompany: string,
                        Img: string,
                        Rating: number): Promise<IOkWithData<Movie> | IError>{
    const addgenre = await movieRepository.addMovie(Name, 
                                                    ReleaseDate, 
                                                    Year, 
                                                    Country, 
                                                    Director, 
                                                    Duration, 
                                                    Screenwriter, 
                                                    Description, 
                                                    Language, 
                                                    FilmCompany, 
                                                    Img, 
                                                    Rating)

    if (!addgenre) {
        return { status: 'error', message: 'genre is not done' }
    }

    return { status: 'success', data: addgenre }
}


async function updateMovie(name: IUpdateMovie, id: number): Promise<IOkWithData<Movie> | IError>{
    const updategenre = await movieRepository.updateMovie(name, id)

    if (!updategenre) {
        return { status: 'error', message: 'genre is not updated' }
    }

    return { status: 'success', data: updategenre }
}


async function deleteMovie(id: number): Promise<IOkWithData<Movie> | IError>{
    const deleteMovie = await movieRepository.deleteMovie(id)

    if (!deleteMovie) {
        return { status: 'error', message: 'Cannot delete genre' };
    }
    
    return { status: 'success', data: deleteMovie }
}

async function getActorById(id: number) : Promise< IOkWithData<IActor> | IError >{

    const actor = await movieRepository.getActorById(id)

    if (!actor){
        return {status: 'error', message: 'movies not found'}
    }
    const filteredMovies = actor?.movies.map((actor) =>{
        return actor.Movie
    })
   

    const filteredActor = 
    {
        ...actor,
        movies: filteredMovies,

    }
    
    if (!filteredActor){
        return {status: 'error', message: 'actor not found'};
    }
  
    return {status: 'success', data: filteredActor}
}


    
   
const movieService = {
    getMovies: getMovies,
    getMovieById: getMovieById,
    getActorById: getActorById,
    addMovie: addMovie,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie
};

export {movieService}

