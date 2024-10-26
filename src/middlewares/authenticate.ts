import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session || !('userName' in req.session) || !req.session.userName) {
    throw new UnauthorizedError('You are not authenticated');
  }
  next();
};
