import { Session, SessionData } from 'express-session';
import { BadRequestError, UnauthorizedError } from '../errors';
import { possibleUsers } from '../utils/possibleUsers';

export const authenticateUser = (username: string, password: string) => {
  const user = possibleUsers.find((user) => user.userName === username && user.password === password);
  if (!user) {
    throw new UnauthorizedError("Can't log in user");
  }
  return { ...user };
};

export const logoutUser = (session: Session & Partial<SessionData>) => {
  if (!session) {
    throw new BadRequestError('Unable to log out, session not found');
  }

  session.destroy((err) => {
    if (err) {
      throw new BadRequestError('Unable to log out');
    }
  });
};
