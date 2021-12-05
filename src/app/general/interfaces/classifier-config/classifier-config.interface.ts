import {ClassifierDataInterface} from './classifier-data.interface';
import {ClassifierIndexAmountInterface} from './classifier-index-amount.interface';

export interface ClassifierConfigInterface {
  classifierData: ClassifierDataInterface[];
  classifierIndexesAmount: ClassifierIndexAmountInterface;
  isCurrent: boolean;
  name: string;
  positiveResults: number;
  testsAmount: number;
  trainingSetSize: number;
}