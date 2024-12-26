import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';
import { router } from "./MoviesApp/movieRouter";
import path from 'path'
import prisma from "../src/client/prismaClient";

const app: Express = express();

const PORT = 3001;
const HOST = 'localhost';

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'))

app.use('/movies/', router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movie/all', (req, res) => {
  res.json({
    message: 'Back-End'
  });
});


app.listen(PORT, HOST, () => {
  console.log('http://localhost:3001/');
});