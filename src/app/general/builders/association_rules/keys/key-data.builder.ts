import {ResultKeysEnum, ResultsIndexesEnum} from '../../../enums';
import {ClassifierDataInterface} from '../../../interfaces/classifier-config';
import {IndexDataManager} from '../../../managers';

export abstract class KeyDataBuilder {
  protected abstract keyType: ResultKeysEnum;
  private readonly indexDataManager: IndexDataManager;

  constructor() {
    this.indexDataManager = new IndexDataManager();
  }

  public get keyTypeValue(): ResultKeysEnum {
    return this.keyType;
  }

  public add(value: number, index: ResultsIndexesEnum): void {
    this.indexDataManager.add(value, index);
  }

  public getParsedData(): ClassifierDataInterface[] {
    const data = this.indexDataManager.getParsedData();
    const result: ClassifierDataInterface[] = [];
    for (const singleData of data) {
      result.push({
        ...singleData,
        typeOfData: this.keyType
      });
    }
    return result;
  }
}