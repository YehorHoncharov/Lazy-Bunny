import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../client/prismaClient';

async function getMovies(){
    try{
        let movies = await prisma.movie.findMany(
            {
                include:{
                      Genres: {include: {Genre: true}},
                      Actors: {include: {Actor: true}},
                      Comments: {include: {author: true}}
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
                Comments: {include: {author: true}}
            }
        });
        return movie;
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


async function getAllGenres(){
    try{
        let genres = await prisma.genre.findMany({
        })
        return genres
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
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



const movieRepository = {
    getActorById:getActorById,
    getMovies:getMovies,
    getMovieById:getMovieById,
    getAllGenres: getAllGenres,
};

export {movieRepository}