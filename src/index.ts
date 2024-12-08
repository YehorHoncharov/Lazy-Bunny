import express, { Express,Request, Response } from 'express';
import { router } from "./MoviesApp/movieRouter";
import path from 'path'
const app: Express = express();

const PORT = 8000;
const HOST = 'localhost';

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'))

app.use('/movies/', router)

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(PORT, HOST, () => {
  console.log('http://localhost:8000/');
});