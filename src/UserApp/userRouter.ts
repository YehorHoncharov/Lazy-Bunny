import express from 'express';
import userController from './userController'

const router = express.Router();

router.post('/login', userController.authorisateUser)
router.post('/reg', userController.registrateUser)

export default router