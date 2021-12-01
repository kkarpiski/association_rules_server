import {Controller, Get} from '@nestjs/common';
import {StationWithResultInterface} from '../../../../general/interfaces/resources';
import {StationsService} from '../services/stations.service';

@Controller('station')
export class StationsController {

  constructor(
    private readonly stationService: StationsService
  ) {
  }

  @Get('results')
  public async getClassifierConfig(): Promise<StationWithResultInterface[]> {
    return this.stationService.findStationsWithLastResults();
  }
}
