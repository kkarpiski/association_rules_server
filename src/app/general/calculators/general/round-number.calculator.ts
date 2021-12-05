export class RoundNumberCalculator {
  private readonly roundedValue: number;

  constructor(
    private readonly value: number
  ) {
    this.roundedValue = this.roundValue();
  }

  public get instance(): number {
    return this.roundedValue;
  }

  private roundValue(): number {
    const {value} = this;
    return +value.toFixed(4);
  }
}