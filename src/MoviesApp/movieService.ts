import { Prisma } from '@prisma/client'
import {movieRepository} from "./movieRepository"


// type IMovie = Prisma.MovieGetPayload<{include: {Genres: true, Actors: true}}>
type IGenre = Prisma.GenreGetPayload<{}>
type IActor= Prisma.ActorGetPayload<{}>
type IComment= Prisma.CommentGetPayload<{}>

// interface IActor{
//     id: number
//     name: string
//     surname: string
//     dateOfBirth: number
//     placeOfBirth: String
//     height: number
//     career: string
//     totalMovies: number
//     image: string
//     movies: Prisma.MovieGetPayload<{}>[]
// }

interface IMovie{
    id: number
    Name: string
    ReleaseDate: string
    Year: number
    Country: string
    Director: string
    Duration: string
    Screenwriter: string
    Description: string
    Language: string
    FilmCompany: string
    Img: string
    Rating: number
    Actors: IActor[]
    Comments: IComment[]
    Genres: IGenre[]
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

interface IActorSuccess{
    status: 'success',
    data: IActor
}
interface IActorError{
    status: 'error',
    message: string
}







async function getMovies() : Promise< IMoviesSuccess | IMovieError >{
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
            Genres: filteredGenres,
            Actors: filteredActors
        }
        
        
    })
    

    if (!filterMovies){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: filterMovies}
}

async function getMovieById(id: number) : Promise< IMovieSuccess | IMovieError >{

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
        Genres: filteredGenres,
        Actors: filteredActors
    }

    if (!filteredMovie){
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: filteredMovie}
}

async function getActorById(id: number) : Promise< IActorSuccess | IActorError >{

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
    getActorById: getActorById
};

export {movieService}

