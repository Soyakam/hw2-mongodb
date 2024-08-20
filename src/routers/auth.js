// src/routers/auth.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserSchema} from '../validation/auth.js';
import { loginUserController } from '../controllers/auth.js';
import { logoutUserController } from '../controllers/auth.js';
const router = Router();
import { refreshUserSessionController } from '../controllers/auth.js';

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
export default router;
router.post('/logout', ctrlWrapper(logoutUserController));