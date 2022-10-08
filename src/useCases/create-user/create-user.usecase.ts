import { User } from '../../entities/user.entity';
import { ParameterRequiredError } from '../../erros/parameter-required.error';
import { UserRepository } from '../../repositories/user.repository';

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = UserRepository.getInstance();

    const user = User.create(data);

    if (!data.username || !data.password) {
      throw new ParameterRequiredError(
        'Usernam/password is required',
        422
      );
    }

    const existUser = await userRepository.findByUsername(
      data.username
    );

    if (existUser) {
      throw new ParameterRequiredError('User already exists', 409);
    }

    const userCreated = await userRepository.save(user);

    return userCreated;
  }
}
