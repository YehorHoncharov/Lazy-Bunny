import express, { Express, Request, Response } from 'express'
import {movieController} from './movieController';

const router = express.Router();

router.get('/', movieController.getMovies)
router.get('/:id', movieController.getMovieById)
// router.get('/genres', movieController.getAllGenres)

export {router}