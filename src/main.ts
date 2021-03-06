import exitHook from 'async-exit-hook';
import {AppDispatcher} from './app/app.dispatcher';
import {AppLogger} from './app/general/logger/logger';

const logger = new AppLogger('Index');

logger.log('Start');

const dispatcher = new AppDispatcher();
dispatcher
  .dispatch()
  .then(() => logger.log('Everything up'))
  .catch(e => {
    logger.error(e.message, e.stack);
    process.exit(1);
  });

exitHook(callback => {
  dispatcher.shutdown().then(() => {
    logger.log('Graceful shutdown the server');
    callback();
  });
});
