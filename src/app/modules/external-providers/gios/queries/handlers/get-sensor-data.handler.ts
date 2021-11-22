import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SensorDataInterface} from '../../../../../general/interfaces/external-providers/gios';
import {GIOSService} from '../../gios.service';
import {GetSensorDataQuery} from '../implementations';

@QueryHandler(GetSensorDataQuery)
export class GetSensorDataHandler implements IQueryHandler<GetSensorDataQuery> {

  constructor(
    private readonly giosService: GIOSService
  ) {
  }

  public async execute({sensorId}: GetSensorDataQuery): Promise<SensorDataInterface> {
    return this.giosService.getSensorData(sensorId);
  }
}
