import winston, { format, transports } from 'winston';

import config, { ServerEnvironment } from './config';

const loggingConfig = config.get('logging');

const logger = winston.createLogger({
  level: loggingConfig.level,
  transports: [
      new transports.File({
          filename: loggingConfig.filename,
          format: format.json(),
        }),
    ],
});

if (config.get('server.env') !== ServerEnvironment.Production) {
  logger.add(
        new transports.Console({
          format: format.combine(
                format.colorize(),
                format.simple(),
            ),
        }),
    );
}

export default logger;
