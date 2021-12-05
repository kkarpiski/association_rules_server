import {ResultsIndexesEnum} from '../../enums';

export interface ClassifierIndexDataInterface {
  amountOfDefinedValues: number;
  indexOfData: ResultsIndexesEnum;
  mean: number;
  standardDeviation: number;
}