import {ResultsIndexesEnum} from '../../enums';
import {ResultsInterface} from './results.interface';
import {DateTime} from 'luxon';

export interface ResultInterface extends BaseResultInterface{
  measurementDate: DateTime;
  stationId: string;
}

export interface BaseResultInterface {
  airQualityIndex: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex: ResultsIndexesEnum;
  results: ResultsInterface;
}