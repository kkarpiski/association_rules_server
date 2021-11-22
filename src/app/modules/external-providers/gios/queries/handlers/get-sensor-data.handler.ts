import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {GiosSensorDataInterface} from '../../../../../general/interfaces/external-providers/gios';
import {GIOSService} from '../../gios.service';
import {GetSensorDataQuery} from '../implementations';

@QueryHandler(GetSensorDataQuery)
export class GetSensorDataHandler implements IQueryHandler<GetSensorDataQuery> {

  constructor(
    private readonly giosService: GIOSService
  ) {
  }

  public async execute({sensorId}: GetSensorDataQuery): Promise<GiosSensorDataInterface> {
    return this.giosService.getSensorData(sensorId);
  }
}
