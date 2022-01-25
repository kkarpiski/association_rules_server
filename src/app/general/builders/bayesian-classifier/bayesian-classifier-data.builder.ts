import {ResultKeysEnum} from '../../enums';
import {ClassifierDataInterface} from '../../interfaces/classifier-config';
import {DatabaseResultInterface} from '../../interfaces/database-resources';
import {AppLogger} from '../../logger/logger';
import {KeyDataManager} from '../../managers';

export class BayesianClassifierDataBuilder {
  private readonly logger = new AppLogger(BayesianClassifierDataBuilder.name);

  private readonly bayesianClassifierData: ClassifierDataInterface[];
  private readonly keyDataManager: KeyDataManager;
  private readonly keyValues: ResultKeysEnum[] = [
    ResultKeysEnum.PM10,
    ResultKeysEnum.PM25,
    ResultKeysEnum.O3,
    ResultKeysEnum.NO2,
    ResultKeysEnum.SO2
  ];

  constructor(
    private readonly results: DatabaseResultInterface[]
  ) {
    this.keyDataManager = new KeyDataManager();
    this.bayesianClassifierData = this.buildBayesianClassifierData();
  }

  public get instance(): ClassifierDataInterface[] {
    return this.bayesianClassifierData;
  }

  private buildBayesianClassifierData(): ClassifierDataInterface[] {
    const {results, keyDataManager} = this;
    const total = results.length;
    let counter = 0;
    results.forEach(result => {
      this.addResultToConfigData(result);
      counter++;
      this.logger.debug(`[buildBayesianClassifierData] Progress ${(counter / total * 100).toFixed(2)}`);
    });
    return keyDataManager.getParsedData();
  }

  private addResultToConfigData(result: DatabaseResultInterface): void {
    const {results, airQualityIndex} = result;
    for (const key in results) {
      if (!this.keyValues.includes(key as ResultKeysEnum)) {
        continue;
      }
      const value = results[key];
      this.keyDataManager.add({
        value: value,
        key: key as ResultKeysEnum,
        index: airQualityIndex
      });
    }
  }
}