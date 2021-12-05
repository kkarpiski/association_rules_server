import {BadRequestException} from '@nestjs/common';
import {
  C6h6KeyDataBuilder,
  CoKeyDataBuilder,
  KeyDataBuilder,
  No2KeyDataBuilder,
  O3KeyDataBuilder,
  Pm10KeyDataBuilder,
  Pm25KeyDataBuilder,
  So2KeyDataBuilder
} from '../builders/bayesian-classifier/keys';
import {ResultKeysEnum, ResultsIndexesEnum} from '../enums';
import {ClassifierDataInterface} from '../interfaces/classifier-config';

interface AddKeyDataParamsInterface {
  index: ResultsIndexesEnum;
  key: ResultKeysEnum;
  value: number;
}

export class KeyDataManager {
  private readonly keyDataBuilders: KeyDataBuilder[] = [];

  constructor() {
    const {keyDataBuilders} = this;
    keyDataBuilders.push(new C6h6KeyDataBuilder());
    keyDataBuilders.push(new CoKeyDataBuilder());
    keyDataBuilders.push(new No2KeyDataBuilder());
    keyDataBuilders.push(new O3KeyDataBuilder());
    keyDataBuilders.push(new Pm10KeyDataBuilder());
    keyDataBuilders.push(new Pm25KeyDataBuilder());
    keyDataBuilders.push(new So2KeyDataBuilder());
  }

  public add({
               index,
               key,
               value
             }: AddKeyDataParamsInterface): void {
    const {keyDataBuilders} = this;
    const builder = keyDataBuilders.find(keyDataBuilder => keyDataBuilder.keyTypeValue === key);
    if (!builder) {
      throw new BadRequestException(`Builder for ${key} not found!`);
    }
    builder.add(value, index);
  }

  public getParsedData(): ClassifierDataInterface[] {
    const parsedData: ClassifierDataInterface[] = [];
    const {keyDataBuilders} = this;
    for (const keyDataBuilder of keyDataBuilders) {
      parsedData.push(...keyDataBuilder.getParsedData());
    }
    return parsedData;
  }
}