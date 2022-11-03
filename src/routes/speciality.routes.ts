import { Router } from 'express';
import { createSpecialityController } from '../modules/speciality/useCases/create-speciality';

const specialityRouter = Router();

specialityRouter.post('/specialities', (req, res) => {
  createSpecialityController.handle(req, res);
});

export { specialityRouter };
