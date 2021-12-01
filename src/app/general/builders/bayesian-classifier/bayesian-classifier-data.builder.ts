import {DatabaseResultInterface} from '../../interfaces/database-resources';

export class BayesianClassifierDataBuilder {
  private readonly bayesianClassifierData: Record<string, number>;

  constructor(
    private readonly results: DatabaseResultInterface[]
  ) {
    this.bayesianClassifierData = this.buildBayesianClassifierData();
  }

  public get instance(): Record<string, number> {
    return this.bayesianClassifierData;
  }

  private buildBayesianClassifierData(): Record<string, number> {
    const {results} = this;
    //TODO: implement bayesian classifier config
    return {};
  }
}