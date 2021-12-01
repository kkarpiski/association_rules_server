import {Body, Controller, Post} from '@nestjs/common';
import {DataClassifyDto} from '../../../general/dtos/bayesian-classifier';
import {BaseResultInterface} from '../../../general/interfaces/resources';
import {BayesianClassifierService} from '../services/bayesian-classifier.service';

@Controller('bayesian-classifier')
export class BayesianClassifierController {

  constructor(
    private readonly bayesianClassifierService: BayesianClassifierService
  ) {
  }

  @Post()
  public async classify(
    @Body() data: DataClassifyDto
  ): Promise<BaseResultInterface> {
    return this.bayesianClassifierService.classify(data);
  }
}