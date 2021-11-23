import {ResultsIndexesEnum} from '../../../enums';

export interface GiosIndexRange {
  index: ResultsIndexesEnum;
  lowerBorder: number;
  upperBorder: number | null;
}