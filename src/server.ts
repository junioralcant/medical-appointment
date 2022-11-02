import express from 'express';
import { specialityRouter } from './routes/speciality.routes';
import { userRouter } from './routes/user.routes';

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(specialityRouter);

app.listen(3333, () => console.log('Server is running on port 3333'));
