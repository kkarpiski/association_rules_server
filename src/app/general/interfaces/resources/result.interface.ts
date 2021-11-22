import {ResultsIndexesEnum} from '../../enums';
import {DatabaseEntityInterface} from '../database-entity.interface';
import {ResultsInterface} from './results.interface';

export interface ResultInterface extends DatabaseEntityInterface {
  bayesClassifierIndex: ResultsIndexesEnum;
  index: ResultsIndexesEnum;
  results: ResultsInterface;
  stationId: string;
}