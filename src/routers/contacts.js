import express, { Router } from "express";
import {
  getContactIDController,
  getContactsController,
  createContactController,
  deleteContactController,
  changeContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactIDController));

router.post('/contacts', jsonParser, validateBody(createContactSchema), ctrlWrapper(createContactController));
 
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.patch('/contacts/:contactId', jsonParser, isValidId, validateBody(updateContactSchema), ctrlWrapper(changeContactController));

export default router;
