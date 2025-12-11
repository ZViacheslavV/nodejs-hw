import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
} from '../validations/authValidation.js';
import { loginUser, registerUser } from '../controllers/authController.js';

const routerAuth = Router();

routerAuth.post('/auth/register', celebrate(registerUserSchema), registerUser);
routerAuth.post('/auth/login', celebrate(loginUserSchema), loginUser);

export default routerAuth;
