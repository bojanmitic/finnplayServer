import express from 'express';
import { UnauthorizedError } from '../errors';
import { authenticateUser } from '../services/authentication';

const authenticationRouter = express.Router();

authenticationRouter.post('/login', (req, res, next) => {
  const { userName, password } = req.body;
  const user = authenticateUser(userName, password);
  if (user) {
    res.json(user);
  } else {
    next(new UnauthorizedError("Can't login user"));
  }
});

export default authenticationRouter;
