import { User } from '../entities/user.entity';

export class UserRepository {
  users: User[] = [];

  async findByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  async save(date: User) {
    this.users.push(date);
    return date;
  }
}
