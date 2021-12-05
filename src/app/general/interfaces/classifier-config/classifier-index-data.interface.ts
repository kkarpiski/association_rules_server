import {ResultsIndexesEnum} from '../../enums';

export interface ClassifierIndexDataInterface {
  amountOfDefinedValues: number;
  amountOfUndefinedValues: number;
  indexOfData: ResultsIndexesEnum;
  mean: number;
  standardDeviation: number;
}