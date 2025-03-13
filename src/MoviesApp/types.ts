import { Prisma } from "@prisma/client";

export type Movie = Prisma.GenreGetPayload<{}>

export type CreateMovie = Prisma.MovieUncheckedCreateInput

export type MovieWithGenres = Prisma.MovieGetPayload<{ include: { Genres: true, Actors: true }}>