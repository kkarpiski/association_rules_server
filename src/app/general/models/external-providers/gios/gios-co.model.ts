import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosCoModel extends GiosParamModel {
  protected ranges: GiosIndexRange[] = [];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}