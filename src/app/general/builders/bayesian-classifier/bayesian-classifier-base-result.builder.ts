import {AirQualityIndexCalculator} from '../../calculators/external-providers/gios';
import {NaiveBayesianClassifier} from '../../classifiers/bayesian';
import {DatabaseClassifierConfigInterface} from '../../interfaces/database-resources';
import {BaseResultInterface, ResultsInterface} from '../../interfaces/resources';
import {ClassifierConfigModel} from '../../models/classifier-config';
import {ResultsModel} from '../../models/resources';

export class BayesianClassifierBaseResultBuilder {
  private readonly baseResult: BaseResultInterface;

  constructor(
    private readonly classifierConfig: DatabaseClassifierConfigInterface,
    private readonly results: ResultsInterface
  ) {
    this.baseResult = this.build();
  }

  public get instance(): BaseResultInterface {
    return this.baseResult;
  }

  private build(): BaseResultInterface {
    const {classifierConfig, results} = this;
    const resultsModel = new ResultsModel(results);
    const airQualityIndex = new AirQualityIndexCalculator(resultsModel).getAirQualityIndex();
    const bayesClassifiedAirQualityIndex = new NaiveBayesianClassifier(new ClassifierConfigModel(classifierConfig), resultsModel).instance;
    return {
      airQualityIndex,
      bayesClassifiedAirQualityIndex,
      results
    };
  }
}