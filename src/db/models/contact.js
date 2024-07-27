import { model, Schema } from 'mongoose';

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      optional: true, 
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      required: true,
      default: 'personal',
      enum: ['work', 'home', 'personal'],
    },
  },
  {
    timestamps: true, 
  }
);

export const Contact = model('contacts', ContactSchema);
export default Contact;
