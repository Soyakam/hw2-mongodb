import express from "express";
import pino from "pino-http";
import cors from "cors";
import { env } from './utils/env.js';
import router from './routers/index.js'; // Ensure this is correctly configured
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  // Parse JSON and cookies
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  // Logging with pino
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    })
  );

  // Basic test route
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  // Use the main router
  app.use('/api', router); // Ensure router paths are prefixed as needed

  // Handle undefined routes
  app.use('*', notFoundHandler);

  // Global error handler
  app.use(errorHandler);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
