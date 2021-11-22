import {Transport} from '@nestjs/microservices';
import {DispatchDataConfigInterface} from '../interfaces/configs';

export const dispatchDataConfig: DispatchDataConfigInterface = {
  port: parseInt(process.env.PORT, 10),
  host: process.env.HOST,
  hostName: process.env.HOSTNAME,
  uuid: process.env.UUID,
  microService: {
    transport: Transport.TCP
  }
};
