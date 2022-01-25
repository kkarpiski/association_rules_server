import {ResultsIndexesEnum} from '../../enums';
import {ResultsInterface} from './results.interface';
import {DateTime} from 'luxon';

export interface StationWithResultInterface {
  stationName: string;
  gegrLat: string;
  gegrLon: string;


  airQualityIndex?: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex?: ResultsIndexesEnum;
  measurementDate?: DateTime;
  results?: ResultsInterface;
}