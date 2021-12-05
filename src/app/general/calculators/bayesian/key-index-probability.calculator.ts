import {ClassifierDataInterface} from '../../interfaces/classifier-config';
import {NormalDistributionCalculator} from '../general';

export class KeyIndexProbabilityCalculator {
  private readonly probability: number;
  private readonly defaultValue = 0.00001;

  constructor(
    private readonly classifierData: ClassifierDataInterface,
    private readonly value: number
  ) {
    this.probability = this.calculateProbability();
  }

  public get instance(): number {
    return this.probability;
  }

  private calculateProbability(): number {
    const {classifierData: {mean, standardDeviation}, value} = this;
    if (!mean || !standardDeviation) {
      return this.defaultValue;
    }
    if (!value) {
      //TODO: handle missing value
      return 1;
    }
    return new NormalDistributionCalculator({
      mean,
      standardDeviation,
      value
    }).instance || this.defaultValue;
  }
}