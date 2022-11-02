import { Speciality } from '../../entities/speciality.entity';
import { ISPecialityRepository } from '../../repositories/speciality.respository';

type SpecialityRequest = {
  name: string;
  description: string;
};

export class CreateSpecialityUseCase {
  constructor(private specialityRepository: ISPecialityRepository) {}

  async execute(data: SpecialityRequest) {
    const speciality = Speciality.create(data);

    const specialityCreated = await this.specialityRepository.save(
      speciality
    );

    return specialityCreated;
  }
}
