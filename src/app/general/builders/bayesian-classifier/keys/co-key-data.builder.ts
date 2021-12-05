import {ResultKeysEnum} from '../../../enums';
import {KeyDataBuilder} from './key-data.builder';

export class CoKeyDataBuilder extends KeyDataBuilder {
  protected keyType = ResultKeysEnum.CO;
}