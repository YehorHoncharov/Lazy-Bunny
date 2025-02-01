import { Comment } from './../node_modules/.prisma/client/index.d';
import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';
import { router } from "./MoviesApp/movieRouter";
import path from 'path'
import prisma from "../src/client/prismaClient";
import cors from "cors"

const app: Express = express();

const PORT = 3001;
const HOST = 'localhost';

app.use(cors());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'))

app.use('/movies/', router)


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); 
//   // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/movie/all', async (req, res) => {
//     try{
//       const movies = await prisma.movie.findMany({
//         include:{
//           Genres: {include: {Genre: true}},
//           Actors: {include: {Actor: true}},
//           Comments: true
//         }
//       });
//       res.json(movies);
//     } catch (error) {
//       res.status(500).json({ error: "что-то пошло не так" });
//     }
//   })

//   app.get('/movie/:id', async (req, res) => {
//     try{
//       const { id } = req.params;
//       const movie = await prisma.movie.findUnique({
//         where:{
//             id: parseInt(id)
//         },
//         include:{
//           Genres: {include: {Genre: true}},
//           Actors: {include: {Actor: true}},
//           Comments: true
//         }
//       });
//       res.json(movie);
//     } catch (error) {
//       res.status(500).json({ error: "что-то пошло не так" });
//     }
//   })

// app.get('/movie/all', async (req, res) => {
//   try {
//     const [movies, comments] = await Promise.all([
//       prisma.movie.findMany(),
//       prisma.comment.findMany()
//     ]);

//     res.json({ movies, comments })

//   } catch (error) {
//     console.error('ошибка:', error)
//     res.status(500).json({ error: "шось пошло не по плану((" })
//   }
// });

app.listen(PORT, HOST, () => {
  console.log('http://localhost:3001/');
});