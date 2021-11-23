import {ResultKeysEnum, ResultsIndexesEnum} from '../../../enums';
import {GiosResultsParamFactory} from '../../../factories/external-providers/gios';
import {ResultsModel} from '../../../models/resources';

export class AirQualityIndexCalculator {
  private readonly airQualityIndex: ResultsIndexesEnum;
  private readonly airQualityIndexesOrder: ResultsIndexesEnum[] = [
    ResultsIndexesEnum.VERY_GOOD,
    ResultsIndexesEnum.GOOD,
    ResultsIndexesEnum.MODERATE,
    ResultsIndexesEnum.SUFFICIENT,
    ResultsIndexesEnum.BAD,
    ResultsIndexesEnum.VERY_BAD
  ];

  public constructor(
    private readonly resultModel: ResultsModel
  ) {
    this.airQualityIndex = this.calculateAirQualityIndex();
  }

  public getAirQualityIndex(): ResultsIndexesEnum {
    return this.airQualityIndex;
  }

  private calculateAirQualityIndex(): ResultsIndexesEnum {
    const {resultModel, airQualityIndexesOrder} = this;
    const results = resultModel.getInstance();
    const indexes: ResultsIndexesEnum[] = [];
    for (const key in results) {
      const value = results[key];
      const paramModel = GiosResultsParamFactory.getParamModel(key as ResultKeysEnum, value);
      indexes.push(paramModel.calculateAndSetIndex().getIndex());
    }
    const mappedIndexes = indexes.map(index => airQualityIndexesOrder.findIndex(airQualityIndex => airQualityIndex === index));
    const maxIndex = Math.max(...mappedIndexes);
    if (maxIndex < 0) {
      return ResultsIndexesEnum.UNDEFINED;
    }
    return airQualityIndexesOrder[maxIndex];
  }
}