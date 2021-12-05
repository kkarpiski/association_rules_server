import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class UndefinedIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.UNDEFINED;
}