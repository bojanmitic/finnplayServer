import http from 'http';
import { app } from './app';
import { NODE_ENV, PORT } from './utils/config';
import { logger } from './utils/logger';

const server = http.createServer(app);

(() => {
  server.listen(PORT, () => {
    logger.info(`Server is listening to port ${PORT}, in env: ${NODE_ENV}`);
  });
})();
