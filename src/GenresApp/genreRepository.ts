import { Prisma, PrismaClient } from '@prisma/client'
import prisma from '../client/prismaClient'
import { ICreateGenre, IUpdateGEnre } from './types'


async function getAllGenres(){
    try{
        let genres = await prisma.genre.findMany({
        })
        return genres
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function addGenre(body: ICreateGenre){
    try{
        let addgenre = await prisma.genre.create({
            data: body 
        })
        return addgenre
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function updateGenre(name: IUpdateGEnre, id: number){
    try{
        let updategenre = await prisma.genre.update({
            where: { id }, data: name 
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
async function deleteGenre(id: number){
    try{
        let deletegenre = await prisma.genre.delete({
            where: { id }
        })
        return deletegenre
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

const genreRepository = {
    getAllGenres: getAllGenres,
    addGenre: addGenre,
    updateGenre: updateGenre,
    deleteGenre: deleteGenre
}

export {genreRepository}