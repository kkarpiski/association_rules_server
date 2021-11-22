import mongoose from 'mongoose';
import {databaseConfig} from '../../configs';
import {DB_CON_TOKEN} from './database.constants';

export const databaseProviders = [
  {
    provide: DB_CON_TOKEN,
    useFactory: (): Promise<typeof mongoose> => {
      return mongoose.connect(
        databaseConfig.connectionUrl
      );
    }
  }
];
