import {BadRequestException} from '@nestjs/common';
import {ResultsIndexesEnum} from '../../enums';
import {ClassifierIndexAmountInterface} from '../../interfaces/classifier-config';
import {DatabaseResultInterface} from '../../interfaces/database-resources';

export class BayesianClassifierIndexAmountBuilder {
  private readonly indexAmount: ClassifierIndexAmountInterface = {} as ClassifierIndexAmountInterface;

  constructor(
    private readonly results: DatabaseResultInterface[]
  ) {
    this.buildIndexAmount();
  }

  public get instance(): ClassifierIndexAmountInterface {
    return this.indexAmount;
  }

  private buildIndexAmount(): void {
    const {results} = this;
    const availableIndexes = Object.keys(ResultsIndexesEnum);
    for (const key of availableIndexes) {
      const index = ResultsIndexesEnum[key];
      const filteredResults = results.filter(result => result.airQualityIndex === index);
      this.setClassifierIndexAmount(index, filteredResults.length);
    }
  }

  private setClassifierIndexAmount(index: ResultsIndexesEnum, value: number): void {
    switch (index) {
      case ResultsIndexesEnum.BAD:
        this.indexAmount.bad = value;
        break;
      case ResultsIndexesEnum.GOOD:
        this.indexAmount.good = value;
        break;
      case ResultsIndexesEnum.MODERATE:
        this.indexAmount.moderate = value;
        break;
      case ResultsIndexesEnum.SUFFICIENT:
        this.indexAmount.sufficient = value;
        break;
      case ResultsIndexesEnum.UNDEFINED:
        this.indexAmount.undefined = value;
        break;
      case ResultsIndexesEnum.VERY_BAD:
        this.indexAmount.veryBad = value;
        break;
      case ResultsIndexesEnum.VERY_GOOD:
        this.indexAmount.veryGood = value;
        break;
      default:
        throw new BadRequestException(`Unknown index ${index}!`);
    }
  }
}