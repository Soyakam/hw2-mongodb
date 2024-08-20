import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();
const jsonParser = express.json();
router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
router.post(
  '/',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.post(
  '/register',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);
router.patch(
  '/:contactId',
  jsonParser,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);
export default router;