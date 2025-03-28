import express from 'express'
import {genreController} from './genreController'

const router = express.Router();

router.get('/', genreController.getAllGenres)
router.post('/', genreController.addGenre)
router.put('/:id', genreController.updateGenre)
router.delete('/:id', genreController.deleteGenre)

export default router
