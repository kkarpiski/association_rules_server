import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class VeryBadIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.VERY_BAD;
}