import {ResultKeysEnum} from '../../../enums';
import {KeyDataBuilder} from './key-data.builder';

export class Pm25KeyDataBuilder extends KeyDataBuilder {
  protected keyType = ResultKeysEnum.PM25;
}