import {ResultKeysEnum} from '../../../enums';
import {KeyDataBuilder} from './key-data.builder';

export class O3KeyDataBuilder extends KeyDataBuilder {
  protected keyType = ResultKeysEnum.O3;
}