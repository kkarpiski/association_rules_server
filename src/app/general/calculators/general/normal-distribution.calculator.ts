import {RoundNumberCalculator} from './round-number.calculator';

interface NormalDistributionCalculateParamsInterface {
  mean: number;
  standardDeviation: number;
  value: number;
}

export class NormalDistributionCalculator {
  private readonly normalDistribution: number;

  constructor(
    private readonly data: NormalDistributionCalculateParamsInterface
  ) {
    const calculatedNormalDistribution = this.calculatedNormalDistribution();
    this.normalDistribution = new RoundNumberCalculator(calculatedNormalDistribution).instance;
  }

  public get instance(): number {
    return this.normalDistribution;
  }

  private calculatedNormalDistribution(): number {
    const {data: {mean, standardDeviation, value}} = this;
    return (Math.pow(Math.E, (-1 * Math.pow(value - mean, 2)) / (2 * Math.pow(standardDeviation, 2)))) /
      (Math.pow(2 * Math.PI, 0.5) * standardDeviation);
  }
}