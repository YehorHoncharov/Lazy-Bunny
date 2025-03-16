import { Prisma, PrismaClient, User } from '@prisma/client';
import prisma from '../client/prismaClient';
import { CreateUser, UpdateUser } from './types';

async function getUsers() {
    try {
        const users = await prisma.user.findMany({
            include: {
                comments: true,
                favoriteMovies: true
            }
        });
        return users;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getUserById(id: number) {
    try {
        let user = await prisma.user.findUnique({
            where: {id: id},
        });
        return user;
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

async function updateUserById(data: UpdateUser, id: number) {
    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        if (!currentUser) {
            throw new Error("User not found");
        }

        const updatedData = {
            ...currentUser,
            ...data,
        };

        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: updatedData,
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
    findUserById: findUserById,
    getUsers,
    getUserById,
    updateUserById
};

export default userRepository
