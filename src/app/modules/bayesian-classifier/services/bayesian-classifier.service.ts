import {BadRequestException, Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import {BayesianClassifierBaseResultBuilder} from '../../../general/builders/bayesian-classifier';
import {BaseResultInterface, ResultsInterface} from '../../../general/interfaces/resources';
import {ClassifierConfigFindCurrentQuery} from '../../classifier-config/queries/implementations';
import {ResultFindQuery} from "../../resources/results/queries/implementations";

@Injectable()
export class BayesianClassifierService {

  constructor(
    private readonly queryBus: QueryBus
  ) {
  }

  public async classify(resultsx: ResultsInterface): Promise<void> {
    const oldResults = await this.queryBus.execute(new ResultFindQuery({
      options: {limit: 10, sort: {measurementDate: -1}}
    }));
    const arrayExample = [];
    oldResults.forEach(result => {
      const {results} = result;
      const {PM10, CO, CO2} = results;
      arrayExample.push([PM10, CO, CO2]);
    });
    [
        [2.5,6, null],
        [1, 3, 4]
    ];
    //[{results: {PM10: 2,5, CO: 12}}]
    console.log(JSON.stringify(oldResults));
    return null;
    // const classifierConfig = await this.queryBus.execute(new ClassifierConfigFindCurrentQuery());
    // if (!classifierConfig) {
    //   throw new BadRequestException('You need to train network!');
    // }
    // return new BayesianClassifierBaseResultBuilder(classifierConfig, results).instance;
  }
}