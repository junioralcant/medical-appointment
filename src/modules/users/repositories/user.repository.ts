import { User } from '../entities/user.entity';

export interface IUserRepository {
  findByUsername(username: string): Promise<User | undefined>;
  save(date: User): Promise<User>;
}
