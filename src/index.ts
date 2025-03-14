import express, { Express, Request, Response } from 'express';
import { router } from "./MoviesApp/movieRouter";
import path from 'path'
import cors from "cors"
import userRouter from './UserApp/userRouter';

const app: Express = express();

const PORT = 3001;
const HOST = 'localhost';

app.use(cors());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'))

app.use('/movies/', router)
app.use('/users/', userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, HOST, () => {
  console.log('http://localhost:3001/');
});