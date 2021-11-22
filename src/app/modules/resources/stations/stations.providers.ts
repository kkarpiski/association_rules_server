import {Connection} from 'mongoose';
import {DB_CONNECTION_TOKEN} from '../../../database/database.constants';
import {STATION_TOKEN} from '../../../general/constants';
import {StationSchema} from './schemas';

export const stationsProviders = [
  {
    provide: STATION_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model('Station', StationSchema),
    inject: [DB_CONNECTION_TOKEN]
  }
];