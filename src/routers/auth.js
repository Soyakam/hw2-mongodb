import { Router } from 'express';
import express  from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';
import {
  registerUserController,
  loginUserController,
  logoutUserController,
  refreshUserSessionController
} from '../controllers/auth.js';

const router = Router();
const parseJSON = express.json();

router.post('/register',parseJSON, validateBody(registerUserSchema), ctrlWrapper(registerUserController));

router.post('/login',parseJSON, validateBody(loginUserSchema), ctrlWrapper(loginUserController));

router.post('/logout', parseJSON,ctrlWrapper(logoutUserController));

router.post('/refresh',parseJSON, ctrlWrapper(refreshUserSessionController));

export default router;
