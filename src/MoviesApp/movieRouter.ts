import express from 'express'
import {movieController} from './movieController'

const router = express.Router();

router.get('/', movieController.getMovies)
router.get('/:id', movieController.getMovieById)
router.get('/actor/:id', movieController.getActorById)
router.post('/', movieController.addMovie)
router.put('/:id', movieController.updateMovie)
router.delete('/:id', movieController.deleteMovie)
router.post('/create', movieController.createMovie)
router.post('/:id', movieController.createComment)

export default router