import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {StationIndexInterface} from '../../../../../general/interfaces/external-providers/gios';
import {GIOSService} from '../../gios.service';
import {GetStationIndexQuery} from '../implementations';

@QueryHandler(GetStationIndexQuery)
export class GetStationIndexHandler implements IQueryHandler<GetStationIndexQuery> {

  constructor(
    private readonly giosService: GIOSService
  ) {
  }

  public async execute({stationId}: GetStationIndexQuery): Promise<StationIndexInterface> {
    return this.giosService.getStationIndex(stationId);
  }
}
