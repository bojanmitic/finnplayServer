import express from 'express';
import { BadRequestError, UnauthorizedError } from '../errors';
import { authenticateUser, logoutUser } from '../services/authentication';

const authenticationRouter = express.Router();

declare module 'express-session' {
  interface SessionData {
    userName: string;
  }
}

authenticationRouter.post('/login', (req, res, next) => {
  const { userName, password } = req.body;
  const user = authenticateUser(userName, password);
  if (user) {
    req.session.userName = userName;
    res.json(user);
  } else {
    next(new UnauthorizedError("Can't login user"));
  }
});

authenticationRouter.delete('/logout', (req, res, next) => {
  if (req.session) {
    logoutUser(req.session);
    res.json({ message: 'Logout successful' });
  } else {
    next(new BadRequestError('Session not found'));
  }
});

export default authenticationRouter;
