import {Connection} from 'mongoose';
import {DB_CONNECTION_TOKEN} from '../../../database/database.constants';
import {RESULTS_TOKEN} from '../../../general/constants';
import {ResultSchema} from './schemas';

export const resultsProviders = [
  {
    provide: RESULTS_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model('Result', ResultSchema),
    inject: [DB_CONNECTION_TOKEN]
  }
];