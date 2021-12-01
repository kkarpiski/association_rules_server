import {Connection} from 'mongoose';
import {DB_CONNECTION_TOKEN} from '../../database/database.constants';
import {CLASSIFIER_CONFIG_TOKEN} from '../../general/constants';
import {ClassifierConfigSchema} from './schemas';

export const classifierConfigProviders = [
  {
    provide: CLASSIFIER_CONFIG_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model('ClassifierConfig', ClassifierConfigSchema),
    inject: [DB_CONNECTION_TOKEN]
  }
];