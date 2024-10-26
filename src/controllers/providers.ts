import express from 'express';
import { NotFoundError } from '../errors';
import { authenticate } from '../middlewares/authenticate';
import { getAllProviders } from '../services/providers';

const providersRouter = express.Router();

providersRouter.get('/providers', authenticate, (req, res, next) => {
  const providers = getAllProviders();
  if (providers) {
    res.json(providers);
  } else {
    next(new NotFoundError('Providers not found'));
  }
});

export default providersRouter;
