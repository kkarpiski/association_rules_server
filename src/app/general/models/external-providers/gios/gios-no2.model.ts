import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosNo2Model extends GiosParamModel {
  protected readonly ranges: GiosIndexRange[] = [
    {
      index: ResultsIndexesEnum.VERY_GOOD,
      lowerBorder: 0,
      upperBorder: 40
    },
    {
      index: ResultsIndexesEnum.GOOD,
      lowerBorder: 40,
      upperBorder: 100
    },
    {
      index: ResultsIndexesEnum.MODERATE,
      lowerBorder: 100,
      upperBorder: 150
    },
    {
      index: ResultsIndexesEnum.SUFFICIENT,
      lowerBorder: 150,
      upperBorder: 230
    },
    {
      index: ResultsIndexesEnum.BAD,
      lowerBorder: 230,
      upperBorder: 400
    },
    {
      index: ResultsIndexesEnum.VERY_BAD,
      lowerBorder: 400,
      upperBorder: null
    }
  ];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}