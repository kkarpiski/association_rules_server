import {DatabaseConfigInterface} from '../interfaces/configs';

export const databaseConfig: DatabaseConfigInterface = {
  connectionUrl: process.env.DATABASE_CONNECTION_URL
}