import { Request, Response } from 'express';
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';
import { IToken } from '../../../../infra/shared/token/token';
import { IUserRepository } from '../../repositories/user.repository';
import { AuthenticateUserUseCase } from './authenticate-user.usecase';

export class AuthenticateUserController {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypt: IPasswordCrypto,
    private token: IToken
  ) {}
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;

      const authenticateUserUseCase = new AuthenticateUserUseCase(
        this.userRepository,
        this.passwordCrypt,
        this.token
      );

      const result = await authenticateUserUseCase.execute(data);

      return response.json(result);
    } catch (error: any) {
      return response.status(error.statusCode).json({
        error: error.message,
      });
    }
  }
}
