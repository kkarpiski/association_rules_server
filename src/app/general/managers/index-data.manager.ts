import {BadRequestException} from '@nestjs/common';
import {
  BadIndexDataBuilder,
  GoodIndexDataBuilder,
  IndexDataBuilder,
  ModerateIndexDataBuilder,
  SufficientIndexDataBuilder,
  UndefinedIndexDataBuilder,
  VeryBadIndexDataBuilder,
  VeryGoodIndexDataBuilder
} from '../builders/bayesian-classifier/indexes';
import {ResultsIndexesEnum} from '../enums';
import {ClassifierIndexDataInterface} from '../interfaces/classifier-config';

export class IndexDataManager {
  private readonly indexDataBuilders: IndexDataBuilder[] = [];

  constructor(
  ) {
    const {indexDataBuilders} = this;
    indexDataBuilders.push(new BadIndexDataBuilder());
    indexDataBuilders.push(new GoodIndexDataBuilder());
    indexDataBuilders.push(new ModerateIndexDataBuilder());
    indexDataBuilders.push(new SufficientIndexDataBuilder());
    indexDataBuilders.push(new UndefinedIndexDataBuilder());
    indexDataBuilders.push(new VeryBadIndexDataBuilder());
    indexDataBuilders.push(new VeryGoodIndexDataBuilder());
  }

  public add(value: number, index: ResultsIndexesEnum): void {
    const {indexDataBuilders} = this;
    const builder = indexDataBuilders.find(indexDataBuilder => indexDataBuilder.indexTypeValue === index);
    if (!builder) {
      throw new BadRequestException(`Builder for ${index} not found!`);
    }
    builder.add(value);
  }

  public getParsedData(): ClassifierIndexDataInterface[] {
    const parsedData: ClassifierIndexDataInterface[] = [];
    const {indexDataBuilders} = this;
    for (const indexDataBuilder of indexDataBuilders) {
      parsedData.push(indexDataBuilder.getParsedData());
    }
    return parsedData;
  }
}