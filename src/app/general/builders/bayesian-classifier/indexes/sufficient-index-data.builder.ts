import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class SufficientIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.SUFFICIENT;
}