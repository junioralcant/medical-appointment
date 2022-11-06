import { Router } from 'express';
import { ensureAuthenticate } from '../infra/shared/http/middleware/ensure-authenticate.middleware';
import { createSpecialityController } from '../modules/speciality/useCases/create-speciality';

const specialityRouter = Router();

specialityRouter.post(
  '/specialities',
  ensureAuthenticate,
  (req, res) => {
    createSpecialityController.handle(req, res);
  }
);

export { specialityRouter };
