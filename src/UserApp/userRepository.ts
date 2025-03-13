import { Prisma, PrismaClient } from '@prisma/client';
import prisma from '../client/prismaClient';
import { CreateUser } from './types';

async function findUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        
        return user;

    } catch (err) {
        console.log(err);
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

async function createUser(data: CreateUser) {
    try {
        const user = await prisma.user.create({
            data: data,
        });
        return user;

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

async function findUserById(id: number) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        
        return user;

    } catch (err) {
        console.log(err);
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


const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    findUserById: findUserById
};

export default userRepository
