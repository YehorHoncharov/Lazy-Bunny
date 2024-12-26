import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../client/prismaClient';

async function getMovies(){
    try{
        let movies = await prisma.movie.findMany({})
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
            where: {id: id}
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
        let movies = await prisma.genre.findMany({
        
        })
        return movies
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

const movieRepository = {
    getMovies:getMovies,
    getMovieById:getMovieById,
    getAllGenres:getAllGenres,
};

export {movieRepository}