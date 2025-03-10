import { createContact, deleteContact, getAllContacts, getContactById, patchContact } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (rec, res) => {
    const contacts = await getAllContacts();

    res.json({
        status: 200,
        message: 'Successfully found contacts!',
      data: contacts
    });
};

export const getContactIDController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');

  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);
  res.status(200).json({
    status: 200,
    message: 'Successfully created a contact!',
    data: contact,
  });

};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await deleteContact(contactId);

  if (!contact) {
   throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send({status: 200,
	message: "Successfully patched a contact!",
    data: contact
  });
};

export const changeContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await patchContact(contactId, req.body);

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: "Successfully patched a contact!",
    data: result.contact,
  });

};
export const getContacts = (req, res) => {
    res.json({
        message: 'Contacts endpoint',
    });
};
