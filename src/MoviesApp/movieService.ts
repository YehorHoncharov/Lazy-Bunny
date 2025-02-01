import { Prisma } from '@prisma/client'
import {movieRepository} from "./movieRepository"


// type IMovie = Prisma.MovieGetPayload<{include: {Genres: true, Actors: true}}>

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
    MoodImg: string
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
    data: Prisma.MovieGetPayload<{}>
}

type IGenre = Prisma.GenreGetPayload<{}>
type IActor= Prisma.ActorGetPayload<{}>
type IComment= Prisma.CommentGetPayload<{}>





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
        return {status: 'error', message: 'movies not found'};
    }
  
    return {status: 'success', data: movie}
}

// async function getAllGenres() : Promise< IGenresSuccess | IGenreError >{
//     const genre = await movieRepository.getAllGenres()

//         if (!genre){
//             return {status: 'error', message: 'genre not found'};
//         }
      
//         return {status: 'success', data: genre}
//     }
    
   
const movieService = {
    getMovies: getMovies,
    getMovieById: getMovieById,
};

export {movieService}

