import { IError, IOkWithData } from "../types/types"
import { genreRepository } from "./genreRepository";
import { ICreateGenre, IGenre, IUpdateGEnre } from "./types";


async function getAllGenres():  Promise<IOkWithData<IGenre[]> | IError >{
    const genres = await genreRepository.getAllGenres()

    if (!genres) {
        return { status: 'error', message: 'No genres found' }
    }

    return { status: 'success', data: genres }
}

async function addGenre(body: ICreateGenre): Promise<IOkWithData<IGenre> | IError>{
    const addgenre = await genreRepository.addGenre(body)

    if (!addgenre) {
        return { status: 'error', message: 'genre is not done' }
    }

    return { status: 'success', data: addgenre }
}

async function updateGenre(name: IUpdateGEnre, id: number): Promise<IOkWithData<IGenre> | IError>{
    const updategenre = await genreRepository.updateGenre(name, id)

    if (!updategenre) {
        return { status: 'error', message: 'genre is not updated' }
    }

    return { status: 'success', data: updategenre }
}

async function deleteGenre(id: number): Promise<IOkWithData<IGenre> | IError>{
    const deletegenre = await genreRepository.deleteGenre(id)

    if (!deletegenre) {
        return { status: 'error', message: 'Cannot delete genre' };
    }
    
    return { status: 'success', data: deletegenre }
}

export const genreService = {
    getAllGenres,
    addGenre,
    updateGenre,
    deleteGenre
}

