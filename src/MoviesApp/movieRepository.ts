import { Prisma } from '@prisma/client';
import prisma from '../client/prismaClient';
import { CreateComment, CreateMovie, IUpdateMovie } from './types';

async function getMovies(){
    try{
        let movies = await prisma.movie.findMany(
            {
                include:{
                      Genres: {include: {Genre: true}},
                      Actors: {include: {Actor: true}},
                      Comments: {include: {author: true}},
                      Moments: true
                    }
                })
        return movies
    } catch(err){
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

async function getMovieById(id: number) {
    try {
        let movie = await prisma.movie.findUnique({
            where: {id: id},
            include:{
                Genres: {include: {Genre: true}},
                Actors: {include: {Actor: true}},
                Comments: {include: {author: true}},
                Moments: true
            }
        });
        return movie
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
    Rating: number,
    Baner: string,
    Mood: string,
    Moments: string[] = [],
    Url: string
){
    try{
        let addMovie = await prisma.movie.create({
            data: { 
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
                Baner,
                Mood,
                Url,
                Moments: {
                    create: Moments.map(url => ({ url }))
                },
            },
            include: {
                Moments: true
            }
        })
        return addMovie
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function updateMovie(Movie: IUpdateMovie, id: number){
    try{
        let updategenre = await prisma.movie.update({
            where: { id }, data: Movie
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
async function deleteMovie(id: number){
    try{
        let deleteMovie = await prisma.movie.delete({
            where: { id }
        })
        return deleteMovie
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            }
        }
    }
}

async function getActorById(id: number) {
    try {
        let actor = await prisma.actor.findUnique({
            where: {id: id},
            include:{
                movies: {include: {Movie: true}},
            }
        });
        return actor;
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



async function createComment(data: CreateComment) {
    try {
        const comment = await prisma.comment.create({
            data: data,
        });
        return comment;

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


// async function createMovie(data: CreateMovie) {
//   try {
//     const newMovie = await prisma.movie.create({
//       data: {
//         ...data,
//       },
//     });
//     return newMovie;
//   } catch (err) {
//     console.log(err)
//     if (err instanceof Prisma.PrismaClientKnownRequestError){
//         if (err.code == 'P2002'){
//             console.log(err.message);
//             throw err;
//         }
//         if (err.code == 'P2015'){
//             console.log(err.message);
//             throw err;
//         }
//         if (err.code == 'P20019'){
//             console.log(err.message);
//             throw err;
//         }
//     }
// }
// }

// async function createMovie(data: CreateMovie) {
//     try {
//       // Для жанров используем правильное поле для поиска и создания
//       const genresToConnect = Array.isArray(data.Genres)
//         ? data.Genres.map((genreName) => ({
//             where: { name: genreName },  // Ищем жанр по полю 'name'
//             create: { name: genreName }, // Если жанр не найден, создаём его
//           }))
//         : [];
  
//       // Для актеров аналогично
//       const actorsToConnect = Array.isArray(data.Actors)
//         ? data.Actors.map((actor) => ({
//             where: { id: actor.id }, 
//             create: actor,
//           }))
//         : [];
  
//       const newMovie = await prisma.movie.create({
//         data: {
//           Name: data.Name,
//           ReleaseDate: data.ReleaseDate,
//           Year: data.Year,
//           Country: data.Country,
//           Director: data.Director,
//           Duration: data.Duration,
//           Screenwriter: data.Screenwriter,
//           Description: data.Description,
//           Language: data.Language,
//           FilmCompany: data.FilmCompany,
//           Img: data.Img,
//           Rating: data.Rating,
//           Mood: data.Mood,
//           Baner: data.Baner,
//           Url: data.Url,
//           Moments: {
//             create: Array.isArray(data.Moments) ? data.Moments.map((url) => ({ url })) : undefined,
//           },
//           Genres: {
//             connectOrCreate: genresToConnect,
//           },
//           Actors: {
//             connectOrCreate: actorsToConnect,
//           },
//         },
//       });
  
//       return newMovie;
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   }

async function createMovie(data: CreateMovie) {
    try {
      // Обработка жанров с использованием upsert
      const genreUpserts = Array.isArray(data.Genres)
        ? await Promise.all(
            data.Genres.map((genreName) =>
              prisma.genre.upsert({
                where: { name: genreName },
                create: { name: genreName },
                update: {}, // Пустое обновление, если жанр уже существует
              })
            )
          )
        : [];
  
      // Обработка актеров с connectOrCreate
      const actorsToConnect = Array.isArray(data.Actors)
        ? data.Actors.map((actor) => ({
            where: { id: actor.id },
            create: actor,
          }))
        : [];
  
      // Создание фильма со всеми связями
      const newMovie = await prisma.movie.create({
        data: {
          Name: data.Name,
          ReleaseDate: data.ReleaseDate,
          Year: data.Year,
          Country: data.Country,
          Director: data.Director,
          Duration: data.Duration,
          Screenwriter: data.Screenwriter,
          Description: data.Description,
          Language: data.Language,
          FilmCompany: data.FilmCompany,
          Img: data.Img,
          Rating: data.Rating,
          Mood: data.Mood,
          Baner: data.Baner,
          Url: data.Url,
          Genres: {
            connect: genreUpserts.map((genre) => ({
              id: genre.id, // Подключаем жанры по ID
            })),
          },
          Actors: {
            connectOrCreate: actorsToConnect, // Для актеров используем connectOrCreate
          },
          Moments: {
            create: Array.isArray(data.Moments)
              ? data.Moments.map((url) => ({ url })) // Создаем моменты для фильма
              : undefined,
          },
        },
      });
  
      return newMovie;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  
  

const movieRepository = {
    getActorById:getActorById,
    getMovies:getMovies,
    getMovieById:getMovieById,
    addMovie:addMovie,
    deleteMovie:deleteMovie,
    updateMovie:updateMovie,
    createComment:createComment,
    createMovie:createMovie,
};

export {movieRepository}