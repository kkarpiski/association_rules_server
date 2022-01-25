import {databaseConfig} from '../../config/configs';
import {DB_CONNECTION_TOKEN} from './database.constants';
import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(
        databaseConfig.connectionUrl,
        {}
      )
  }
];
