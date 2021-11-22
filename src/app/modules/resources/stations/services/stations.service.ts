import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {STATION_TOKEN} from '../../../../general/constants';
import {DatabaseStationInterface} from '../../../../general/interfaces/database-resources';
import {CrudService} from '../../../../general/services';

@Injectable()
export class StationsService extends CrudService<DatabaseStationInterface> {

  constructor(
    @Inject(STATION_TOKEN) private readonly stationModel: Model<DatabaseStationInterface>
  ) {
    super(stationModel);
  }
}