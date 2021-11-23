import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosPm25Model extends GiosParamModel {
  protected readonly ranges: GiosIndexRange[] = [
    {
      index: ResultsIndexesEnum.VERY_GOOD,
      lowerBorder: 0,
      upperBorder: 13
    },
    {
      index: ResultsIndexesEnum.GOOD,
      lowerBorder: 13,
      upperBorder: 35
    },
    {
      index: ResultsIndexesEnum.MODERATE,
      lowerBorder: 35,
      upperBorder: 55
    },
    {
      index: ResultsIndexesEnum.SUFFICIENT,
      lowerBorder: 55,
      upperBorder: 75
    },
    {
      index: ResultsIndexesEnum.BAD,
      lowerBorder: 75,
      upperBorder: 110
    },
    {
      index: ResultsIndexesEnum.VERY_BAD,
      lowerBorder: 110,
      upperBorder: null
    }
  ];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}