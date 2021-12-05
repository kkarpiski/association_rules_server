import {RoundNumberCalculator} from './round-number.calculator';
import {SumCalculator} from './sum.calculator';

export class MeanCalculator {
  private readonly mean: number;

  constructor(
    private readonly values: number[]
  ) {
    const calculatedMean = this.calculateMean();
    this.mean = new RoundNumberCalculator(calculatedMean).instance;
  }

  public get instance(): number {
    return this.mean;
  }

  private calculateMean(): number {
    const {values} = this;
    const sum = new SumCalculator(values).instance;
    return sum / values.length;
  }
}