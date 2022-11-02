import { Request, Response } from 'express';
import { ISPecialityRepository } from '../../repositories/speciality.respository';
import { CreateSpecialityUseCase } from './create-speciality.usecase';

export class CreateSpecialityController {
  constructor(private specialityRepository: ISPecialityRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const specialityUseCase = new CreateSpecialityUseCase(
        this.specialityRepository
      );

      const speciality = await specialityUseCase.execute(
        request.body
      );

      return response.json(speciality);
    } catch (error: any) {
      return response.status(error.statusCode || 400).json({
        error: error.message,
      });
    }
  }
}
