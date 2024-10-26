import http from 'http';
import { app } from './app';
import { NODE_ENV, PORT } from './utils/config';
import { seedData } from './utils/fileSeed';
import { logger } from './utils/logger';

const server = http.createServer(app);

seedData();

(() => {
  server.listen(PORT, () => {
    logger.info(`Server is listening to port ${PORT}, in env: ${NODE_ENV}`);
  });
})();
