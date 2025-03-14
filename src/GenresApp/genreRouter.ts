import express from 'express'
import {genreController} from './genreController'

const router = express.Router();

router.get('/', genreController.getAllGenres)

export default router