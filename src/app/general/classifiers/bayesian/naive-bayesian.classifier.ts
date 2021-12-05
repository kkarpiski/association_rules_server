import {KeyIndexProbabilityCalculator} from '../../calculators/bayesian';
import {RoundNumberCalculator} from '../../calculators/general';
import {ResultKeysEnum, ResultsIndexesEnum} from '../../enums';
import {ClassifierConfigModel} from '../../models/classifier-config';
import {ResultsModel} from '../../models/resources';

interface IndexProbabilityInterface {
  index: ResultsIndexesEnum;
  probability: number;
}

export class NaiveBayesianClassifier {
  private readonly classificationResult: ResultsIndexesEnum;
  private readonly keyValues: ResultKeysEnum[] = [
    ResultKeysEnum.PM10,
    ResultKeysEnum.PM25,
    ResultKeysEnum.O3,
    ResultKeysEnum.NO2,
    ResultKeysEnum.SO2
  ];
  private readonly availableIndexes: ResultsIndexesEnum[] = Object.values(ResultsIndexesEnum);

  constructor(
    private readonly classifierConfigModel: ClassifierConfigModel,
    private readonly resultsModel: ResultsModel
  ) {
    this.classificationResult = this.classify();
  }

  public get instance(): ResultsIndexesEnum {
    return this.classificationResult;
  }

  private classify(): ResultsIndexesEnum {
    const {availableIndexes, resultsModel, classifierConfigModel, keyValues} = this;
    const results = resultsModel.getInstance();
    const probabilities: IndexProbabilityInterface[] = [];
    for (const index of availableIndexes) {
      let probability = 1;
      for (const key in results) {
        if (!keyValues.includes(key as ResultKeysEnum)) {
          continue;
        }
        const value = results[key];
        const data = classifierConfigModel.getData(index, key as ResultKeysEnum);
        const multiplier = new KeyIndexProbabilityCalculator(data, value).instance;
        probability *= multiplier;
      }
      const pIndex = this.calculateIndexProbability(index);
      const finalProbability = pIndex * probability;
      probabilities.push({
        index,
        probability: finalProbability
      });
    }
    const sortedProbabilities = probabilities.sort(
      (firstProbability: IndexProbabilityInterface, secondProbability: IndexProbabilityInterface) =>
        firstProbability.probability - secondProbability.probability
    );
    const biggestProbability = sortedProbabilities.pop();
    return biggestProbability.index;
  }

  public calculateIndexProbability(index: ResultsIndexesEnum): number {
    const {classifierConfigModel} = this;
    const indexAmount = classifierConfigModel.getIndexAmount(index);
    const probability = indexAmount / classifierConfigModel.trainingSetSize;
    return new RoundNumberCalculator(probability).instance;
  }
}