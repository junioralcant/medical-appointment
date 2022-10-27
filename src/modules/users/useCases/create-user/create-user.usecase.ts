import { CustomError } from '../../../../erros/custom.error';
import { ParameterRequiredError } from '../../../../erros/parameter-required.error';
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';
import { User } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.repository';

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

  async execute(data: UserRequest) {
    const user = User.create(data);

    if (!data.username || !data.password) {
      throw new ParameterRequiredError(
        'Usernam/password is required',
        422
      );
    }

    const existUser = await this.userRepository.findByUsername(
      data.username
    );

    if (existUser) {
      throw new CustomError(
        'User already exists',
        400,
        'USER_EXISTS_ERROR'
      );
    }

    const passwordHashed = await this.passwordCrypto.hasd(
      user.password
    );

    user.password = passwordHashed;

    const userCreated = await this.userRepository.save(user);

    return userCreated;
  }
}
