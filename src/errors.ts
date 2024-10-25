export enum HttpStatusCodes {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500
}

export class BaseError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(HttpStatusCodes.NOT_FOUND, message || 'Resource not found');
  }
}

export class BadRequestError extends BaseError {
  constructor(message: string) {
    super(HttpStatusCodes.BAD_REQUEST, message || 'Bad request');
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(HttpStatusCodes.UNAUTHORIZED, message || 'Unauthorized');
  }
}

export class ForbiddenError extends BaseError {
  constructor(message: string) {
    super(HttpStatusCodes.FORBIDDEN, message || 'Forbidden');
  }
}
