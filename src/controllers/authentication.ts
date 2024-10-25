import express from 'express';
import { UnauthorizedError } from '../errors';
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

authenticationRouter.delete('/logout', async (req, res, next) => {
  try {
    await logoutUser(req.session);
    res.json({ message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
});

export default authenticationRouter;
