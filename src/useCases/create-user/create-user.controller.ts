import { Request, Response } from 'express';
import { logger } from '../../utils/logger';
import { CreateUserUseCase } from './create-user.usecase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute(data);

      response.json(result);
    } catch (error: any) {
      logger.error(error.stack);
      return response.status(400).json(error.message);
    }
  }
}
