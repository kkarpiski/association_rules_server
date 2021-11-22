import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {SensorInterface} from '../../../../../general/interfaces/external-providers/gios';
import {GIOSService} from '../../gios.service';
import {FindSensorsQuery} from '../implementations';

@QueryHandler(FindSensorsQuery)
export class FindSensorsHandler implements IQueryHandler<FindSensorsQuery> {

  constructor(
    private readonly giosService: GIOSService
  ) {
  }

  public async execute({stationId}: FindSensorsQuery): Promise<SensorInterface[]> {
    return this.giosService.findSensors(stationId);
  }
}
