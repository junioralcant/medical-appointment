import { prismaClient } from '../../../../infra/database/prisma.config';
import { User } from '../../entities/user.entity';
import { IUserRepository } from '../user.repository';

export class UserPrismaRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | undefined> {
    const user = await prismaClient.user.findUnique({
      where: {
        username,
      },
    });

    return user || undefined;
  }
  async save({ name, username, password }: User): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        username,
        password,
      },
    });

    return user;
  }
}
