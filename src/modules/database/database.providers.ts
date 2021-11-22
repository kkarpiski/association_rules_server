import mongoose from 'mongoose';
import {databaseConfig} from '../../configs';
import {DB_CONNECTION_TOKEN} from './database.constants';

export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: (): Promise<typeof mongoose> => {
      return mongoose.connect(
        databaseConfig.connectionUrl,
        {useNewUrlParser: true}
      );
    }
  }
];
