import express from 'express';
import userController from './userController'

const router = express.Router();

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUserById)
router.delete('/:id', userController.deleteUserById)
router.post('/login', userController.authorisateUser)
router.post('/reg', userController.registrateUser)

export default router