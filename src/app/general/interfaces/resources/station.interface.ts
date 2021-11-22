import {DatabaseEntityInterface} from '../database-entity.interface';

export interface StationInterface extends DatabaseEntityInterface {
  externalId: number;
  stationName: string;
}