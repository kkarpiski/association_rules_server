import {BadRequestException} from '@nestjs/common';
import {ResultKeysEnum, ResultsIndexesEnum} from '../../enums';
import {ClassifierDataInterface} from '../../interfaces/classifier-config';
import {DatabaseClassifierConfigInterface} from '../../interfaces/database-resources';

export class ClassifierConfigModel {

  constructor(
    private readonly classifierConfig: DatabaseClassifierConfigInterface
  ) {
  }

  public get instance(): DatabaseClassifierConfigInterface {
    return this.classifierConfig;
  }

  public get trainingSetSize(): number {
    return this.instance.trainingSetSize;
  }

  public getData(index: ResultsIndexesEnum, key: ResultKeysEnum): ClassifierDataInterface {
    const {classifierConfig: {classifierData}} = this;
    return classifierData?.find(classifierSingleData => classifierSingleData.indexOfData === index &&
      classifierSingleData.typeOfData === key);
  }

  public getIndexAmount(index: ResultsIndexesEnum): number {
    const {classifierIndexesAmount} = this.instance;
    switch (index) {
      case ResultsIndexesEnum.BAD:
        return classifierIndexesAmount.bad;
      case ResultsIndexesEnum.GOOD:
        return classifierIndexesAmount.good;
      case ResultsIndexesEnum.MODERATE:
        return classifierIndexesAmount.moderate;
      case ResultsIndexesEnum.SUFFICIENT:
        return classifierIndexesAmount.sufficient;
      case ResultsIndexesEnum.UNDEFINED:
        return classifierIndexesAmount.undefined;
      case ResultsIndexesEnum.VERY_BAD:
        return classifierIndexesAmount.veryBad;
      case ResultsIndexesEnum.VERY_GOOD:
        return classifierIndexesAmount.veryGood;
      default:
        throw new BadRequestException(`Unknown index ${index}!`);
    }
  }
}