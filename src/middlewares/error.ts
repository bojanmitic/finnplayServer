import { Request, Response, NextFunction } from 'express';
import {
  BadRequestError,
  BaseError,
  ForbiddenError,
  HttpStatusCodes,
  NotFoundError,
  UnauthorizedError
} from '../errors';
import { logger } from '../utils/logger';

const isNotFoundError = (error: Error) => {
  return error instanceof NotFoundError;
};

const getStatusCode = (error: Error) => {
  let statusCode = HttpStatusCodes.BAD_REQUEST;
  if (error instanceof BadRequestError) {
    statusCode = HttpStatusCodes.BAD_REQUEST;
  } else if (error instanceof UnauthorizedError) {
    statusCode = HttpStatusCodes.UNAUTHORIZED;
  } else if (isNotFoundError(error)) {
    statusCode = HttpStatusCodes.NOT_FOUND;
  } else if (error instanceof ForbiddenError) {
    statusCode = HttpStatusCodes.FORBIDDEN;
  }
  return statusCode;
};

export const errorResponder = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = getStatusCode(error);
  res.status(statusCode).json({ message: error.message, data: null });
};

export const errorLogger = (error: Error, _req: Request, _res: Response, next: NextFunction) => {
  logger.error(`Error: ${error.message}`);
  if (!(error instanceof BaseError) && error.stack) {
    logger.error(error.stack);
  }
  next(error);
};
