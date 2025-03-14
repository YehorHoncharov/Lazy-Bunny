import { IError, IOkWithData } from "../types/types"
import { genreRepository } from "./genreRepository";
import { IGenre } from "./types";


async function getAllGenres():  Promise<IOkWithData<IGenre[]> | IError >{
    const genres = await genreRepository.getAllGenres()

    if (!genres) {
        return { status: 'error', message: 'No genres found' }
    }

    return { status: 'success', data: genres }
}

export const genreService = {
    getAllGenres
}

