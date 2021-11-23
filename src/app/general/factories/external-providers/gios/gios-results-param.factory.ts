import {BadRequestException} from '@nestjs/common';
import {ResultKeysEnum} from '../../../enums';
import {
  Gios03Model,
  GiosC6h6Model, GiosCoModel,
  GiosNo2Model,
  GiosParamModel,
  GiosPm10Model,
  GiosPm25Model,
  GiosSo2Model
} from '../../../models/external-providers/gios';

export class GiosResultsParamFactory {

  public static getParamModel(key: ResultKeysEnum, value: number | null): GiosParamModel {
    switch (key) {
      case ResultKeysEnum.O3:
        return new Gios03Model(value);
      case ResultKeysEnum.C6H6:
        return new GiosC6h6Model(value);
      case ResultKeysEnum.CO:
        return new GiosCoModel(value);
      case ResultKeysEnum.NO2:
        return new GiosNo2Model(value);
      case ResultKeysEnum.PM10:
        return new GiosPm10Model(value);
      case ResultKeysEnum.PM25:
        return new GiosPm25Model(value);
      case ResultKeysEnum.SO2:
        return new GiosSo2Model(value);
      default:
        throw new BadRequestException('Unknown result key');
    }
  }
}