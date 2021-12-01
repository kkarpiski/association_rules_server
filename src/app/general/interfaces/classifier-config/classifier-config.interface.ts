export interface ClassifierConfigInterface {
  classifierData: Record<string, number | string>;
  isCurrent: boolean;
  name: string;
  positiveResults: number;
  testsAmount: number;
  trainingSetSize: number;
}