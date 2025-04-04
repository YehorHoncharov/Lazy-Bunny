import { Prisma } from '@prisma/client';
import prisma from '../client/prismaClient';
import { CreateComment, IUpdateMovie } from './types';

async function getMovies(){
    try{
        let movies = await prisma.movie.findMany(
            {
                include:{
                      Genres: {include: {Genre: true}},
                      Actors: {include: {Actor: true}},
                      Comments: {include: {author: true}},
                      Moments: true
                    }
                })
        return movies
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P20019'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function getMovieById(id: number) {
    try {
        let movie = await prisma.movie.findUnique({
            where: {id: id},
            include:{
                Genres: {include: {Genre: true}},
                Actors: {include: {Actor: true}},
                Comments: {include: {author: true}},
                Moments: true
            }
        });
        return movie
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);
                throw err;
            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);
                throw err;
            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);
                throw err;
            }
        } else {
            console.error('неизвестная ошибка', err);
            throw err;
        }
    }
}

async function addMovie(
    Name: string, 
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
    Rating: number,
    Baner: string,
    Mood: string,
    Moments: string[] = [],
    Url: string
){
    try{
        let addMovie = await prisma.movie.create({
            data: { 
                Name, 
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
                Rating,
                Baner,
                Mood,
                Url,
                Moments: {
                    create: Moments.map(url => ({ url }))
                },
            },
            include: {
                Moments: true
            }
        })
        return addMovie
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function updateMovie(Movie: IUpdateMovie, id: number){
    try{
        let updategenre = await prisma.movie.update({
            where: { id }, data: Movie
        })
        return updategenre
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}
async function deleteMovie(id: number){
    try{
        let deleteMovie = await prisma.movie.delete({
            where: { id }
        })
        return deleteMovie
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function getActorById(id: number) {
    try {
        let actor = await prisma.actor.findUnique({
            where: {id: id},
            include:{
                movies: {include: {Movie: true}},
            }
        });
        return actor;
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {

            if (err.code === 'P2002') {
                console.error('ошибка P2002: нарушение уникальности.', err.message);
                throw err;
            }

            if (err.code === 'P2015') {
                console.error('ошибка P2015: запись не найдена.', err.message);
                throw err;
            }

            if (err.code === 'P2019') {
                console.error('ошибка P2019: поле не существует.', err.message);
                throw err;
            }
        } else {
            console.error('неизвестная ошибка', err);
            throw err;
        }
    }
}



async function createComment(data: CreateComment) {
    try {
        const comment = await prisma.comment.create({
            data: data,
        });
        return comment;

    } catch (err) {
        console.log(err)
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P20019'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

const movieRepository = {
    getActorById:getActorById,
    getMovies:getMovies,
    getMovieById:getMovieById,
    addMovie:addMovie,
    deleteMovie:deleteMovie,
    updateMovie:updateMovie,
    createComment:createComment
};

export {movieRepository}