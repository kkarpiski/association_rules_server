import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {GiosStationInterface} from '../../../../../general/interfaces/external-providers/gios';
import {GIOSService} from '../../gios.service';
import {FindAllStationsQuery} from '../implementations';

@QueryHandler(FindAllStationsQuery)
export class FindAllStationsHandler implements IQueryHandler<FindAllStationsQuery> {

  constructor(
    private readonly giosService: GIOSService
  ) {
  }

  public async execute(): Promise<GiosStationInterface[]> {
    return this.giosService.findAllStations();
  }
}
