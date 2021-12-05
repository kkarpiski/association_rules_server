import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class GoodIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.GOOD;
}