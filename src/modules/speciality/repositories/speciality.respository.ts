import { Speciality } from '../entities/speciality.entity';

export interface ISPecialityRepository {
  save(data: Speciality): Promise<Speciality>;
  findByName(name: string): Promise<Speciality | null>;
}
