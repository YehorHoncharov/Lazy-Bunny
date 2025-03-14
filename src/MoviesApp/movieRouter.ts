import express from 'express'
import {movieController} from './movieController'

const router = express.Router();

router.get('/', movieController.getMovies)
router.get('/:id', movieController.getMovieById)
router.get('/actor/:id', movieController.getActorById)

export default router