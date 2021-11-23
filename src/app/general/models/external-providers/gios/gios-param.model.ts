import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';

export abstract class GiosParamModel {
  private index: ResultsIndexesEnum = ResultsIndexesEnum.UNDEFINED;
  protected abstract ranges: GiosIndexRange[];

  protected constructor(
    private readonly value: number | null
  ) {
  }

  public getIndex(): ResultsIndexesEnum {
    return this.index;
  }

  public calculateAndSetIndex(): this {
    this.index = this.calculateIndex(this.ranges);
    return this;
  }

  private calculateIndex(ranges: GiosIndexRange[]): ResultsIndexesEnum {
    const {value} = this;
    if (!value) {
      return ResultsIndexesEnum.UNDEFINED;
    }
    const matchedRange = ranges.find(range => {
      const {lowerBorder, upperBorder} = range;
      const isBiggerThanLowerBorder = !lowerBorder || lowerBorder < value;
      const isSmallerThanUpperBorder = !upperBorder || upperBorder >= value;
      return isBiggerThanLowerBorder && isSmallerThanUpperBorder;
    });
    if (!matchedRange) {
      return ResultsIndexesEnum.UNDEFINED;
    }
    return matchedRange.index;
  }
}