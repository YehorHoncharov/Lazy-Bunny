import { Prisma } from "@prisma/client";

export type IGenre = Prisma.GenreGetPayload<{}>

export type IUpdateGEnre = Prisma.GenreUpdateInput

export type ICreateGenre = Prisma.GenreCreateInput