import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user.usecase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      console.log(data);

      const createUserUseCase = new CreateUserUseCase();

      const result = await createUserUseCase.execute(data);

      response.json(result);
    } catch (error: any) {
      return response.status(400).json(error.message);
    }
  }
}
