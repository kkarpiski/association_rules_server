import {DatabaseStationInterface} from '../../interfaces/database-resources';
import {GiosSensorDataInterface} from '../../interfaces/external-providers/gios';
import {ResultInterface} from '../../interfaces/resources';
import {ClassifierConfigModel} from '../../models/classifier-config';
import {GiosDateToDateTimeTransformer} from '../../transformers/external-providers/gios';
import {ResultBuilder} from './result.builder';

interface ResultBuilderParamsInterface {
  classifierConfigModel: ClassifierConfigModel;
  results: GiosSensorDataInterface[];
  station: DatabaseStationInterface;
}

export class ResultsBuilder {
  private readonly results: ResultInterface[] = [];

  public constructor(
    private readonly data: ResultBuilderParamsInterface
  ) {
    this.results = this.buildResults();
  }

  public getResults(): ResultInterface[] {
    return this.results;
  }

  private buildResults(): ResultInterface[] {
    const {data} = this;
    const resultExample = this.getMaxResultExample();
    const {values} = resultExample;
    const results: ResultInterface[] = [];
    for (const value of values) {
      const {date} = value;
      const measurementDate = new GiosDateToDateTimeTransformer(date).getParsedDate();
      const result = new ResultBuilder({
        ...data,
        measurementDate
      }).getResult();
      results.push(result);
    }
    return results;
  }

  private getMaxResultExample(): GiosSensorDataInterface {
    const {data} = this;
    const {results} = data;
    const resultsValuesLengths = results.map(result => result.values.length);
    const maxValue = Math.max(...resultsValuesLengths);
    const maxValueIndex = resultsValuesLengths.findIndex(resultValuesLength => resultValuesLength === maxValue);
    return results[maxValueIndex];
  }
}

