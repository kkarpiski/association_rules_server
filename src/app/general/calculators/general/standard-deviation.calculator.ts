import {MeanCalculator} from './mean.calculator';
import {RoundNumberCalculator} from './round-number.calculator';

export class StandardDeviationCalculator {
  private readonly standardDeviation: number;

  constructor(
    private readonly values: number[]
  ) {
    const calculatedStandardDeviation = this.calculateStandardDeviation();
    this.standardDeviation = new RoundNumberCalculator(calculatedStandardDeviation).instance;
  }

  public get instance(): number {
    return this.standardDeviation;
  }

  private calculateStandardDeviation(): number {
    const {values} = this;
    const mean = new MeanCalculator(values).instance;
    const valuesAmount = values.length;
    return Math
      .sqrt(values
        .map(value => Math.pow(value - mean, 2))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0) / valuesAmount);
  }
}