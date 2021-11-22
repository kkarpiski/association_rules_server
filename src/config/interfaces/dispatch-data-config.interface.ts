import {MicroserviceOptions} from '@nestjs/microservices';

export interface DispatchDataConfigInterface {
  port: number;
  host: string;
  hostName: string;
  uuid: string;
  microService: MicroserviceOptions;
}