import cors from 'cors';
import express, { Application } from 'express';
import { errorLogger, errorResponder } from './middlewares/error';
import { setupRoutes } from './routes';
import { CORS_URLS } from './utils/config';
import { sessionParser } from './utils/session';

export const app: Application = express();

app.use(sessionParser);
app.use(cors({ origin: CORS_URLS, credentials: true }));
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

app.use(errorLogger);
app.use(errorResponder);
