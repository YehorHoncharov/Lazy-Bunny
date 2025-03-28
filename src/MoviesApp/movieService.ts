import { Prisma } from '@prisma/client';
import { movieRepository } from './movieRepository';
import { IError, IOkWithData } from '../types/types';
import { IUpdateMovie, Movie, MovieWithGenres } from './types';
import * as yup from 'yup';

type IGenre = Prisma.GenreGetPayload<{}>;
type IActor = Prisma.ActorGetPayload<{}>;
type IComment = Prisma.CommentGetPayload<{}>;

// Схемы валидации
const addMovieSchema = yup.object().shape({
  Name: yup.string().required('Название фильма обязательно').min(3, 'Название должно содержать минимум 3 символа'),
  ReleaseDate: yup.string().required('Дата выпуска обязательна'),
  Year: yup.number().required('Год выпуска обязателен').positive('Год должен быть положительным числом'),
  Country: yup.string().required('Страна обязательна'),
  Director: yup.string().required('Режиссёр обязателен'),
  Duration: yup.string().required('Длительность обязательна'),
  Screenwriter: yup.string().required('Сценарист обязателен'),
  Description: yup.string().required('Описание обязательно'),
  Language: yup.string().required('Язык обязателен'),
  FilmCompany: yup.string().required('Кинокомпания обязательна'),
  Img: yup.string().required('Изображение обязательно'),
  Rating: yup.number().required('Рейтинг обязателен').min(0, 'Рейтинг должен быть не меньше 0').max(10, 'Рейтинг должен быть не больше 10'),
});

const updateMovieSchema = yup.object().shape({
  Name: yup.string().min(3, 'Название должно содержать минимум 3 символа'),
  ReleaseDate: yup.string(),
  Year: yup.number().positive('Год должен быть положительным числом'),
  Country: yup.string(),
  Director: yup.string(),
  Duration: yup.string(),
  Screenwriter: yup.string(),
  Description: yup.string(),
  Language: yup.string(),
  FilmCompany: yup.string(),
  Img: yup.string(),
  Rating: yup.number().min(0, 'Рейтинг должен быть не меньше 0').max(10, 'Рейтинг должен быть не больше 10'),
});

async function getMovies(): Promise<IOkWithData<MovieWithGenres[]> | IError> {
  const movies = await movieRepository.getMovies();

  const filterMovies = movies?.map((movie) => {
    const filteredGenres = movie.Genres.map((genre) => {
      return genre.Genre;
    });
    const filteredActors = movie.Actors.map((actor) => {
      return actor.Actor;
    });

    return {
      ...movie,
    };
  });

  if (!filterMovies) {
    return { status: 'error', message: 'movies not found' };
  }

  return { status: 'success', data: filterMovies };
}

async function getMovieById(id: number): Promise<IOkWithData<MovieWithGenres> | IError> {
  const movie = await movieRepository.getMovieById(id);

  if (!movie) {
    return { status: 'error', message: 'movies not found' };
  }
  const filteredGenres = movie?.Genres.map((genre) => {
    return genre.Genre;
  });
  const filteredActors = movie?.Actors.map((actor) => {
    return actor.Actor;
  });

  const filteredMovie = {
    ...movie,
  };

  if (!filteredMovie) {
    return { status: 'error', message: 'movies not found' };
  }

  return { status: 'success', data: filteredMovie };
}

async function addMovie(
  Name: string,
  ReleaseDate: string,
  Year: number,
  Country: string,
  Director: string,
  Duration: string,
  Screenwriter: string,
  Description: string,
  Language: string,
  FilmCompany: string,
  Img: string,
  Rating: number
): Promise<IOkWithData<Movie> | IError> {
  try {
    // Валидация данных
    await addMovieSchema.validate({
      Name,
      ReleaseDate,
      Year,
      Country,
      Director,
      Duration,
      Screenwriter,
      Description,
      Language,
      FilmCompany,
      Img,
      Rating,
    }, { abortEarly: false });

    const addMovie = await movieRepository.addMovie(
      Name,
      ReleaseDate,
      Year,
      Country,
      Director,
      Duration,
      Screenwriter,
      Description,
      Language,
      FilmCompany,
      Img,
      Rating
    );

    if (!addMovie) {
      return { status: 'error', message: 'Movie is not created' };
    }

    return { status: 'success', data: addMovie };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return { status: 'error', message: err.errors.join(', ') };
    }
    return { status: 'error', message: 'Internal server error' };
  }
}

async function updateMovie(name: IUpdateMovie, id: number): Promise<IOkWithData<Movie> | IError> {
  try {
    // Валидация данных
    await updateMovieSchema.validate(name, { abortEarly: false });

    const updateMovie = await movieRepository.updateMovie(name, id);

    if (!updateMovie) {
      return { status: 'error', message: 'Movie is not updated' };
    }

    return { status: 'success', data: updateMovie };
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return { status: 'error', message: err.errors.join(', ') };
    }
    return { status: 'error', message: 'Internal server error' };
  }
}

async function deleteMovie(id: number): Promise<IOkWithData<Movie> | IError> {
  const deleteMovie = await movieRepository.deleteMovie(id);

  if (!deleteMovie) {
    return { status: 'error', message: 'Cannot delete movie' };
  }

  return { status: 'success', data: deleteMovie };
}

async function getActorById(id: number): Promise<IOkWithData<IActor> | IError> {
  const actor = await movieRepository.getActorById(id);

  if (!actor) {
    return { status: 'error', message: 'Actor not found' };
  }
  const filteredMovies = actor?.movies.map((actor) => {
    return actor.Movie;
  });

  const filteredActor = {
    ...actor,
    movies: filteredMovies,
  };

  if (!filteredActor) {
    return { status: 'error', message: 'Actor not found' };
  }

  return { status: 'success', data: filteredActor };
}

const movieService = {
  getMovies,
  getMovieById,
  getActorById,
  addMovie,
  updateMovie,
  deleteMovie,
};

export { movieService };