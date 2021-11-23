import {GiosIndexRange} from '../../../interfaces/external-providers/gios';
import {GiosParamModel} from './gios-param.model';

export class GiosC6h6Model extends GiosParamModel {
  protected ranges: GiosIndexRange[] = [];

  public constructor(
    value: number | null
  ) {
    super(value);
  }
}