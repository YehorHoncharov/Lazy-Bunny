import express, { Express,Request, Response } from 'express';

const app: Express = express();

const PORT = 8000;
const HOST = 'localhost';


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, HOST, () => {
  console.log('http://localhost:8000/');
});