import {LoggerService} from '@nestjs/common';
import {createLogger, format, Logger, transports} from 'winston';
import {dispatchDataConfig, loggerConfig} from '../../../config/configs';

export class AppLogger implements LoggerService {
  private readonly logger: Logger;

  constructor(name: string) {
    this.logger = createLogger({
      level: loggerConfig.level,
      format: format.combine(
        format.label({
          label: `${dispatchDataConfig.hostName}|${name ? name : 'Nest'}`
        }),
        format.timestamp(),
        format.printf(nfo => `${nfo.timestamp} [${nfo.label}] ${nfo.level.toUpperCase()}: ${nfo.message}`)
      ),
      transports: [new transports.Console()]
    });
  }

  error(message: string, trace?: string) {
    this.logger.error(message, JSON.stringify(trace));
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  log(message: string) {
    this.logger.info(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }

  debug(message: string | object) {
    this.logger.debug(typeof message === 'object' ? JSON.stringify(message) : message);
  }
}
