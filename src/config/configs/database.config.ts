import {DatabaseConfigInterface} from '../interfaces';

export const databaseConfig: DatabaseConfigInterface = {
  connectionUrl: process.env.DATABASE_CONNECTION_URL
};
