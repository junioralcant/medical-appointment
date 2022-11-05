import { Router } from 'express';
import { authenticateUserController } from '../modules/users/useCases/authenticate-user';
import { createUserController } from '../modules/users/useCases/create-user';

const userRouter = Router();

userRouter.post('/login', async (req, res) => {
  await authenticateUserController.handle(req, res);
});

userRouter.post('/users', (req, res) => {
  createUserController.handle(req, res);
});

export { userRouter };
