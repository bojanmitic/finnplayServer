import express from 'express';
import { NotFoundError } from '../errors';
import { authenticate } from '../middlewares/authenticate';
import { getAllGroups } from '../services/groups';

const groupsRouter = express.Router();

groupsRouter.get('/groups', authenticate, (req, res, next) => {
  const groups = getAllGroups();
  if (groups) {
    res.json(groups);
  } else {
    next(new NotFoundError('Groups not found'));
  }
});

export default groupsRouter;
