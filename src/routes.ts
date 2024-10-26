import { Application } from 'express';
import authenticationRouter from './controllers/authentication';
import gamesRouter from './controllers/games';
import groupsRouter from './controllers/groups';
import providersRouter from './controllers/providers';

export const setupRoutes = (app: Application) => {
  app.use('/api/v1', gamesRouter);
  app.use('/api/v1', groupsRouter);
  app.use('/api/v1', providersRouter);
  app.use('/api/v1', authenticationRouter);
};
