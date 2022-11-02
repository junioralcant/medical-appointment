import { prismaClient } from '../../../../infra/database/prisma.config';
import { Speciality } from '../../entities/speciality.entity';
import { ISPecialityRepository } from '../speciality.respository';

export class SpecialityPrismaRepository
  implements ISPecialityRepository
{
  async save({
    id,
    name,
    description,
  }: Speciality): Promise<Speciality> {
    const speciality = await prismaClient.speciality.create({
      data: {
        id,
        name,
        description,
      },
    });

    return speciality;
  }
}
