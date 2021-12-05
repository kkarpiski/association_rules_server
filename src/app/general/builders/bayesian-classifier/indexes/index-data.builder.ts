import {MeanCalculator, StandardDeviationCalculator} from '../../../calculators/general';
import {ResultsIndexesEnum} from '../../../enums';
import {ClassifierIndexDataInterface} from '../../../interfaces/classifier-config';

export abstract class IndexDataBuilder {
  protected abstract indexType: ResultsIndexesEnum;
  private readonly values: number[] = [];
  private amountOfDefinedValues = 0;

  public add(value: number | null): void {
    if (!value) {
      //TODO: handle missing data
      return;
    }
    this.values.push(value);
    this.amountOfDefinedValues += 1;
  }

  public get indexTypeValue(): ResultsIndexesEnum {
    return this.indexType;
  }

  public getParsedData(): ClassifierIndexDataInterface {
    const {amountOfDefinedValues, indexType, values} = this;
    const mean = new MeanCalculator(values).instance;
    const standardDeviation = new StandardDeviationCalculator(values).instance;
    return {
      amountOfDefinedValues,
      indexOfData: indexType,
      mean,
      standardDeviation
    };
  }
}