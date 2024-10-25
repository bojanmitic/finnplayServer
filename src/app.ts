import express, { Application } from 'express';
import { setupRoutes } from './routes';

export const app: Application = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupRoutes(app);
