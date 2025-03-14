import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../client/prismaClient';


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

const genreRepository = {
    getAllGenres: getAllGenres
};

export {genreRepository}