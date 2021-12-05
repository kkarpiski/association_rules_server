import {ResultKeysEnum} from '../../enums';
import {ClassifierIndexDataInterface} from './classifier-index-data.interface';

export interface ClassifierDataInterface extends ClassifierIndexDataInterface {
  typeOfData: ResultKeysEnum;
}