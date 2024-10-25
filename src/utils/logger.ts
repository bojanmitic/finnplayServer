import { createLogger, LogContexts, logLevelNameFor, registerLogFormatter } from 'bs-logger';

registerLogFormatter('formatter', (message) => {
  const date = new Date(message.time).toISOString();
  const logLevel = logLevelNameFor(message.context[LogContexts.logLevel]).toUpperCase();
  return `[${logLevel}] [${date}] - ${message.message}`;
});
export const logger = createLogger({
  targets: 'stdout%formatter'
});
