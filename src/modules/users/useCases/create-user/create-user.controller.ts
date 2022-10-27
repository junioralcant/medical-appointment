import { Request, Response } from 'express';
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';
import { logger } from '../../../../utils/logger';
import { IUserRepository } from '../../repositories/user.repository';
import { CreateUserUseCase } from './create-user.usecase';

export class CreateUserController {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypt: IPasswordCrypto
  ) {}
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      const createUserUseCase = new CreateUserUseCase(
        this.userRepository,
        this.passwordCrypt
      );

      const result = await createUserUseCase.execute(data);

      response.json(result);
    } catch (error: any) {
      logger.error(error.stack);
      return response.status(error.statusCode).json({
        error: error.message,
      });
    }
  }
}
