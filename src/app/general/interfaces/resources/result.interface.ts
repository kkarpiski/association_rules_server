import {ResultsIndexesEnum} from '../../enums';
import {ResultsInterface} from './results.interface';

export interface ResultInterface extends BaseResultInterface{
  measurementDate: Date;
  stationId: string;
}

export interface BaseResultInterface {
  airQualityIndex: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex: ResultsIndexesEnum;
  results: ResultsInterface;
}