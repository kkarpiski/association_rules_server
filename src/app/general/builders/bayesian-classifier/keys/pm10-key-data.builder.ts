import {ResultKeysEnum} from '../../../enums';
import {KeyDataBuilder} from './key-data.builder';

export class Pm10KeyDataBuilder extends KeyDataBuilder {
  protected keyType = ResultKeysEnum.PM10;
}