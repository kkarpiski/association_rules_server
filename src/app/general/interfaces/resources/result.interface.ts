import {ResultsIndexesEnum} from '../../enums';
import {ResultsInterface} from './results.interface';

export interface ResultInterface {
  airQualityIndex: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex: ResultsIndexesEnum;
  measurementDate: Date;
  results: ResultsInterface;
  stationId: string;
}