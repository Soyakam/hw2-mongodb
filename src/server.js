import express from "express";
import pino from "pino-http";
import cors from "cors";
import { env } from './utils/env.js';
import contactsRouter from "./routers/contacts.js";
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const PORT = Number(env('PORT', '3000'));
export const setupServer = () => {
    const app = express();
    
    app.use(express.json());
    app.use(cors());

    app.use(
        pino({
            transport: {
                target: 'pino-pretty',
            }
        })
    );
app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });
  app.use(contactsRouter);
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};