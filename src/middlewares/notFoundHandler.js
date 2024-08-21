export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 404,
    error: 'Not Found',
    message: `Route not found: ${req.originalUrl}`,
  });
};
