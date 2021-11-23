import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosSo2Model extends GiosParamModel {
  protected readonly ranges: GiosIndexRange[] = [
    {
      index: ResultsIndexesEnum.VERY_GOOD,
      lowerBorder: 0,
      upperBorder: 50
    },
    {
      index: ResultsIndexesEnum.GOOD,
      lowerBorder: 50,
      upperBorder: 100
    },
    {
      index: ResultsIndexesEnum.MODERATE,
      lowerBorder: 100,
      upperBorder: 200
    },
    {
      index: ResultsIndexesEnum.SUFFICIENT,
      lowerBorder: 200,
      upperBorder: 350
    },
    {
      index: ResultsIndexesEnum.BAD,
      lowerBorder: 350,
      upperBorder: 500
    },
    {
      index: ResultsIndexesEnum.VERY_BAD,
      lowerBorder: 500,
      upperBorder: null
    }
  ];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}