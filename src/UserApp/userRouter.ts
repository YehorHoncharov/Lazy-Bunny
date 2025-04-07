import express from 'express';
import userController from './userController'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';

const router = express.Router();

router.get('/', userController.getUsers)
router.get('/me', authTokenMiddleware, userController.aboutUser)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUserById)
router.delete('/:id', userController.deleteUserById)
router.delete('/comment/:id', userController.deleteCommentById)
router.post('/login', userController.authorisateUser)
router.post('/reg', userController.registrateUser)
router.put('/fav/:id', userController.AddFavouriteFilm)

export default router