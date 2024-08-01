import Contact from '../db/models/contact.js';


function getAllContacts () {
  return Contact.find();
};

function getContactById(contactId)  {
  return Contact.findById(contactId);

};


function createContact  (contact)  {
 return Contact.create(contact);
};

function deleteContact(contactId) {
  return Contact.findByIdAndDelete(contactId);
};

const patchContact = async (contactId, payload ) => {
  const rawResult = await Contact.findOneAndUpdate(
    { _id: contactId },
    payload,
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};



export {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
   patchContact,
};