import { User } from '../../entities/user.entity';
import { IUserRepository } from '../user.repository';

export class UserPrismaRepository implements IUserRepository {
  findByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  save(date: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}