import { IError, IOkWithData } from "../types/types";
import { genreRepository } from "./genreRepository";
import { ICreateGenre, IGenre, IUpdateGEnre } from "./types";
import * as yup from 'yup';


// const createGenreSchema = yup.object().shape({
//   name: yup.string().required('Название жанра обязательно').min(3, 'Название должно содержать минимум 3 символа'),
// });

// const updateGenreSchema = yup.object().shape({
//   name: yup.string().required('Название жанра обязательно').min(3, 'Название должно содержать минимум 3 символа'),
// });

const genreSchema = yup.object().shape({
    name: yup.string().required("Название жанра обязательно").min(3, "Название должно содержать минимум 3 символа"),
  })

async function getAllGenres(): Promise<IOkWithData<IGenre[]> | IError> {
  const genres = await genreRepository.getAllGenres();

  if (!genres) {
    return { status: 'error', message: 'No genres found' };
  }

  return { status: 'success', data: genres };
}

async function addGenre(body: ICreateGenre): Promise<IOkWithData<IGenre> | IError> {
  try {

    await genreSchema.validate(body, { abortEarly: false });

    const addgenre = await genreRepository.addGenre(body);

    if (!addgenre) {
      return { status: 'error', message: 'Genre is not created' };
    }

    return { status: 'success', data: addgenre };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return { status: 'error', message: err.errors.join(', ') };
    }
    return { status: 'error', message: 'Internal server error' };
  }
}

async function updateGenre(name: IUpdateGEnre, id: number): Promise<IOkWithData<IGenre> | IError> {
  try {

    await genreSchema.validate(name, { abortEarly: false });

    const updategenre = await genreRepository.updateGenre(name, id);

    if (!updategenre) {
      return { status: 'error', message: 'Genre is not updated' };
    }

    return { status: 'success', data: updategenre };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return { status: 'error', message: err.errors.join(', ') };
    }
    return { status: 'error', message: 'Internal server error' };
  }
}

async function deleteGenre(id: number): Promise<IOkWithData<IGenre> | IError> {
  const deletegenre = await genreRepository.deleteGenre(id);

  if (!deletegenre) {
    return { status: 'error', message: 'Cannot delete genre' };
  }

  return { status: 'success', data: deletegenre };
}

export const genreService = {
  getAllGenres,
  addGenre,
  updateGenre,
  deleteGenre,
};