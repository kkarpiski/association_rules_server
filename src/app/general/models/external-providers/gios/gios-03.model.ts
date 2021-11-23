import {ResultsIndexesEnum} from '../../../enums';
import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class Gios03Model extends GiosParamModel {
  protected readonly ranges: GiosIndexRange[] = [
    {
      index: ResultsIndexesEnum.VERY_GOOD,
      lowerBorder: 0,
      upperBorder: 70
    },
    {
      index: ResultsIndexesEnum.GOOD,
      lowerBorder: 70,
      upperBorder: 120
    },
    {
      index: ResultsIndexesEnum.MODERATE,
      lowerBorder: 120,
      upperBorder: 150
    },
    {
      index: ResultsIndexesEnum.SUFFICIENT,
      lowerBorder: 150,
      upperBorder: 180
    },
    {
      index: ResultsIndexesEnum.BAD,
      lowerBorder: 180,
      upperBorder: 240
    },
    {
      index: ResultsIndexesEnum.VERY_BAD,
      lowerBorder: 240,
      upperBorder: null
    }
  ];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}