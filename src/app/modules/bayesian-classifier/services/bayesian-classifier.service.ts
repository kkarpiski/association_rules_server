import {BadRequestException, Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import {BayesianClassifierBaseResultBuilder} from '../../../general/builders/bayesian-classifier';
import {BaseResultInterface, ResultsInterface} from '../../../general/interfaces/resources';
import {ClassifierConfigFindCurrentQuery} from '../../classifier-config/queries/implementations';

@Injectable()
export class BayesianClassifierService {

  constructor(
    private readonly queryBus: QueryBus
  ) {
  }

  public async classify(results: ResultsInterface): Promise<BaseResultInterface> {
    const classifierConfig = await this.queryBus.execute(new ClassifierConfigFindCurrentQuery());
    if (!classifierConfig) {
      throw new BadRequestException('You need to train network!');
    }
    return new BayesianClassifierBaseResultBuilder(classifierConfig, results).instance;
  }
}