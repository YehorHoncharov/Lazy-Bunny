import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{}>

export type CreateUser = Prisma.UserUncheckedCreateInput

export type UserWithOther = Prisma.UserGetPayload<{ include: { comments: true, favoriteMovies: true }}>

export type UpdateUser = Prisma.UserUncheckedUpdateInput

 
