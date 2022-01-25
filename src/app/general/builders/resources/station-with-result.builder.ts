import {DatabaseStationInterface} from '../../interfaces/database-resources';
import {ResultInterface, StationWithResultInterface} from '../../interfaces/resources';

export class StationWithResultBuilder {
  private readonly stationWithResult: StationWithResultInterface;

  constructor(
    private readonly station: DatabaseStationInterface,
    private readonly result: ResultInterface
  ) {
    this.stationWithResult = this.build();
  }

  public get instance(): StationWithResultInterface {
    return this.stationWithResult;
  }

  private build(): StationWithResultInterface {
    const {result, station} = this;
    const {stationName, gegrLat, gegrLon} = station;
    if (!result) {
      return {
        stationName, gegrLat, gegrLon
      };
    }
    const {airQualityIndex, bayesClassifiedAirQualityIndex, measurementDate, results} = result;
    return {
      airQualityIndex,
      bayesClassifiedAirQualityIndex,
      measurementDate,
      results,
      stationName,
      gegrLat,
      gegrLon
    };
  }
}