import {ResultsIndexesEnum} from '../../enums';
import {ResultsInterface} from './results.interface';

export interface StationWithResultInterface {
  stationName: string;

  airQualityIndex?: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex?: ResultsIndexesEnum;
  measurementDate?: Date;
  results?: ResultsInterface;
}