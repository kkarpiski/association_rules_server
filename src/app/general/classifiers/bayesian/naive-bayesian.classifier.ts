import {ResultsIndexesEnum} from '../../enums';
import {ClassifierConfigModel} from '../../models/classifier-config';
import {ResultsModel} from '../../models/resources';

export class NaiveBayesianClassifier {
  private readonly classificationResult: ResultsIndexesEnum;

  constructor(
    private readonly classifierConfigModel: ClassifierConfigModel,
    private readonly results: ResultsModel
  ) {
    this.classificationResult = this.classify();
  }

  public get instance(): ResultsIndexesEnum {
    return this.classificationResult;
  }

  private classify(): ResultsIndexesEnum {
    return ResultsIndexesEnum.UNDEFINED;
  }
}