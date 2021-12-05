import {ClassifierDataInterface} from './classifier-data.interface';

export interface ClassifierConfigInterface {
  classifierData: ClassifierDataInterface[];
  isCurrent: boolean;
  name: string;
  positiveResults: number;
  testsAmount: number;
  trainingSetSize: number;
}