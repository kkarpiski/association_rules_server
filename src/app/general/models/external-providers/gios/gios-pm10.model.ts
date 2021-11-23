import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosPm10Model extends GiosParamModel {
  protected readonly ranges: GiosIndexRange[] = [
    {
      index: ResultsIndexesEnum.VERY_GOOD,
      lowerBorder: 0,
      upperBorder: 20
    },
    {
      index: ResultsIndexesEnum.GOOD,
      lowerBorder: 20,
      upperBorder: 50
    },
    {
      index: ResultsIndexesEnum.MODERATE,
      lowerBorder: 50,
      upperBorder: 80
    },
    {
      index: ResultsIndexesEnum.SUFFICIENT,
      lowerBorder: 80,
      upperBorder: 110
    },
    {
      index: ResultsIndexesEnum.BAD,
      lowerBorder: 110,
      upperBorder: 150
    },
    {
      index: ResultsIndexesEnum.VERY_BAD,
      lowerBorder: 150,
      upperBorder: null
    }
  ];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}