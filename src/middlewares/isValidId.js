import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";


export const isValidId = (req, res, next) => {
    const { contactId } = req.perams;
    if (!isValidObjectId(contactId)) {
        throw createHttpError(404, "NOT fount");
    }
    next();
};