import express from 'express';
import * as userController from '../controllers/UserController';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:email', userController.getUserByEmail);
router.put('/:email', userController.updateUserByEmail);
router.delete('/:email', userController.deleteUserByEmail);

export default router;
