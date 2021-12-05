import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class BadIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.BAD;
}