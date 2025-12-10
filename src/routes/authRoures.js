import { celebrate } from 'celebrate';
import { Router } from 'express';
import { registerUserSchema } from '../validations/authValidation.js';
import { registerUser } from '../controllers/authController.js';

const routerAuth = Router();

routerAuth.post('/auth/register', celebrate(registerUserSchema), registerUser);

export default routerAuth;
