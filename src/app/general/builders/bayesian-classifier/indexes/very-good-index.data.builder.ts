import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class VeryGoodIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.VERY_GOOD;
}
