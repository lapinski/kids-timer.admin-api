import { Format } from 'logform';
import * as Transport from 'winston-transport';
import winston, { format, transports } from 'winston';

import { getLoggingConfig } from './config';

const loggingConfig = getLoggingConfig();

const addTransport = (transport: Transport) => logger.add(transport);
const getFileTransport = (filename: string, format: Format) => new transports.File({ filename, format });
const getConsoleTransport = (format: Format) => new transports.Console({ format });
const getConsoleFormat = () => format.combine(format.colorize(), format.simple());

const logger = winston.createLogger({
  level: loggingConfig.level,
  transports: [
    getFileTransport(loggingConfig.filename, format.json()),
  ],
});

export {
  logger,
  addTransport,
  getFileTransport,
  getConsoleFormat,
  getConsoleTransport,
};
