export class SumCalculator {
  private readonly sum: number;

  constructor(
    private readonly values: number[]
  ) {
    this.sum = this.calculateSum();
  }

  public get instance(): number {
    return this.sum;
  }

  private calculateSum(): number {
    const {values} = this;
    return values.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}