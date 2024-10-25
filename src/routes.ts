import { Application } from 'express';
import authenticationRouter from './controllers/authentication';

export const setupRoutes = (app: Application) => {
  app.use('/api/v1', authenticationRouter);
};
