import {ResultsIndexesEnum} from '../../../enums';
import {IndexDataBuilder} from './index-data.builder';

export class ModerateIndexDataBuilder extends IndexDataBuilder {
  protected indexType = ResultsIndexesEnum.MODERATE;
}