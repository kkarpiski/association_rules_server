import {DateTime} from 'luxon';
import {ResultsIndexesEnum} from '../../enums';
import {DatabaseStationInterface} from '../../interfaces/database-resources';
import {GiosSensorDataInterface, GiosStationIndexInterface} from '../../interfaces/external-providers/gios';
import {ResultInterface, ResultsInterface} from '../../interfaces/resources';
import {transformValueToDate} from '../../transformers';

interface ResultBuilderParamsInterface {
  index?: GiosStationIndexInterface;
  measurementDate: DateTime;
  results: GiosSensorDataInterface[];
  station: DatabaseStationInterface;
}

export class ResultBuilder {
  private readonly result: ResultInterface;

  constructor(
    private readonly data: ResultBuilderParamsInterface
  ) {
    this.result = this.buildResult();
  }

  public getResult(): ResultInterface {
    return this.result;
  }

  private buildResult(): ResultInterface {
    const airQualityIndex = this.getAirQualityIndex();
    const classifiedIndex = this.getBayesianQualityIndex();
    const measurementDate = this.getMeasurementDate();
    const results = this.buildResults();
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
    const measurementDateTime = transformValueToDate(measurementDate);
    results.forEach(result => {
      const foundResult = result.values.find(dateValue => +transformValueToDate(dateValue.date) === +measurementDateTime);
      if (foundResult) {
        const {key} = result;
        const {value} = foundResult;
        finalResults[key] = value;
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

  private getAirQualityIndex(): ResultsIndexesEnum {
    const {data} = this;
    const {index} = data;
    //TODO: handle case of optional index
    return index.stIndexLevel.indexLevelName as ResultsIndexesEnum;
  }

  private getBayesianQualityIndex(): ResultsIndexesEnum {
    //TODO: replace with classified value
    return this.getAirQualityIndex();
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

