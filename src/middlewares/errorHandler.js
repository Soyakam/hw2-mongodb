import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status || 500).json({
      status: err.status,
      message: err.message || 'Something went wrong',
      data: err,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      data: err.message,
    });
  }
};

export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found',
  });
};
