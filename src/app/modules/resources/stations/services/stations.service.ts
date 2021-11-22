import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {STATION_TOKEN} from '../../../../general/constants';
import {StationInterface} from '../../../../general/interfaces/resources';
import {CrudService} from '../../../../general/services';

@Injectable()
export class StationsService extends CrudService<StationInterface> {

  constructor(
    @Inject(STATION_TOKEN) private readonly stationModel: Model<StationInterface>
  ) {
    super(stationModel);
  }
}