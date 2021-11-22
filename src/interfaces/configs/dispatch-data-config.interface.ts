import {MicroserviceOptions} from '@nestjs/microservices';

export interface DispatchDataConfigInterface {
  host: string;
  hostName: string;
  microService: MicroserviceOptions;
  port: number;
  uuid: string;
}