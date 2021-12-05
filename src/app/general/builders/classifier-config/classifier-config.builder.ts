import {
  ClassifierConfigCreateParamsInterface,
  ClassifierConfigInterface,
  ClassifierIndexAmountInterface
} from '../../interfaces/classifier-config';
import {DatabaseResultInterface} from '../../interfaces/database-resources';
import {BayesianClassifierDataBuilder, BayesianClassifierIndexAmountBuilder} from '../bayesian-classifier';

export class ClassifierConfigBuilder {
  private readonly classifierConfig: ClassifierConfigInterface;

  constructor(
    private readonly data: ClassifierConfigCreateParamsInterface,
    private readonly results: DatabaseResultInterface[]
  ) {
    this.classifierConfig = this.initClassifierConfig();
    this.build();
  }

  public get instance(): ClassifierConfigInterface {
    return this.classifierConfig;
  }

  private build(): this {
    this
      .buildClassifierConfigData()
      .buildClassifierIndexAmountData();
    return this;
  }

  private buildClassifierConfigData(): this {
    const {results} = this;
    this.classifierConfig.classifierData = new BayesianClassifierDataBuilder(results).instance;
    return this;
  }

  private buildClassifierIndexAmountData(): this {
    const {results} = this;
    this.classifierConfig.classifierIndexesAmount = new BayesianClassifierIndexAmountBuilder(results).instance;
    return this;
  }

  private initClassifierConfig(): ClassifierConfigInterface {
    const {data: {name, trainingSetSize}} = this;
    return {
      classifierData: [],
      classifierIndexesAmount: {} as ClassifierIndexAmountInterface,
      isCurrent: true,
      name,
      positiveResults: 0,
      testsAmount: 0,
      trainingSetSize
    };
  }
}