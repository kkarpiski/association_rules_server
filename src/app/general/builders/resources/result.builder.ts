import {DateTime} from 'luxon';
import {AirQualityIndexCalculator} from '../../calculators/external-providers/gios';
import {ResultsIndexesEnum} from '../../enums';
import {DatabaseStationInterface} from '../../interfaces/database-resources';
import {GiosSensorDataInterface} from '../../interfaces/external-providers/gios';
import {ResultInterface, ResultsInterface} from '../../interfaces/resources';
import {ResultsModel} from '../../models/resources';
import {GiosDateToDateTimeTransformer} from '../../transformers/external-providers/gios';

interface ResultBuilderParamsInterface {
  measurementDate: DateTime;
  results: GiosSensorDataInterface[];
  station: DatabaseStationInterface;
}

export class ResultBuilder {
  private readonly result: ResultInterface;

  public constructor(
    private readonly data: ResultBuilderParamsInterface
  ) {
    this.result = this.buildResult();
  }

  public getResult(): ResultInterface {
    return this.result;
  }

  private buildResult(): ResultInterface {
    const measurementDate = this.getMeasurementDate();
    const results = this.buildResults();
    const airQualityIndex = this.getAirQualityIndex(results);
    const classifiedIndex = this.getBayesianQualityIndex(results);
    const stationId = this.getStationId();
    return {
      airQualityIndex,
      bayesClassifiedAirQualityIndex: classifiedIndex,
      measurementDate,
      results,
      stationId
    };
  }

  private buildResults(): ResultsInterface {
    const {data} = this;
    const {results} = data;
    const finalResults = this.initResults();
    const measurementDate = this.getMeasurementDate();
    results.forEach(result => {
      const foundResult = result.values.find(dateValue =>
        +new GiosDateToDateTimeTransformer(dateValue.date).getParsedDate() === +measurementDate);
      if (foundResult) {
        const {key} = result;
        const {value} = foundResult;
        finalResults[key.replace('.', '')] = value;
      }
    });
    return finalResults;
  }

  private initResults(): ResultsInterface {
    return {
      C6H6: null,
      CO: null,
      NO2: null,
      O3: null,
      PM10: null,
      PM25: null,
      SO2: null
    };
  }

  private getAirQualityIndex(results: ResultsInterface): ResultsIndexesEnum {
    return new AirQualityIndexCalculator(new ResultsModel(results)).getAirQualityIndex();
  }

  private getBayesianQualityIndex(results: ResultsInterface): ResultsIndexesEnum {
    //TODO: replace with classified value
    return this.getAirQualityIndex(results);
  }

  private getStationId(): string {
    const {data} = this;
    const {station} = data;
    return station._id.toString();
  }

  private getMeasurementDate(): Date {
    const {data} = this;
    const {measurementDate} = data;
    return measurementDate;
  }
}

