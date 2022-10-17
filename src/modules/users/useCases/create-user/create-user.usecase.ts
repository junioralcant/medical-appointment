import { ParameterRequiredError } from '../../../../erros/parameter-required.error';
import { User } from '../../entities/user.entity';
import { IUserRepository } from '../../repositories/user.repository';

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

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
      throw new ParameterRequiredError('User already exists', 409);
    }

    const userCreated = await this.userRepository.save(user);

    return userCreated;
  }
}
