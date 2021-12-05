import {Controller, Get} from '@nestjs/common';
import {ResultsService} from '../services/results.service';

@Controller('result')
export class ResultsController {

  constructor(
    private readonly resultsService: ResultsService
  ) {
  }

  @Get('count')
  public async countResults(): Promise<number> {
    return this.resultsService.count({});
  }
}
