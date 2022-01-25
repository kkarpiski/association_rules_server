import {Inject, Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import {Model} from 'mongoose';
import {StationWithResultBuilder} from '../../../../general/builders/resources';
import {STATION_TOKEN} from '../../../../general/constants';
import {DatabaseStationInterface} from '../../../../general/interfaces/database-resources';
import {ResultInterface, StationWithResultInterface} from '../../../../general/interfaces/resources';
import {CrudService} from '../../../../general/services';
import {ResultFindQuery} from '../../results/queries/implementations';

@Injectable()
export class StationsService extends CrudService<DatabaseStationInterface> {
  private readonly resultsFetchMultiplier = 3;

  constructor(
    @Inject(STATION_TOKEN) private readonly stationModel: Model<DatabaseStationInterface>,
    private readonly queryBus: QueryBus
  ) {
    super(stationModel);
  }

  public async findStationsWithLastResults(): Promise<StationWithResultInterface[]> {
    const stations = await this.find({
      projection: ['externalId', 'stationName', 'gegrLat', 'gegrLon'],
      options: {lean: true}
    });
    const results = await this.queryBus.execute(new ResultFindQuery({
      options: {
        lean: true,
        limit: stations.length * this.resultsFetchMultiplier,
        sort: {measurementDate: -1}
      }
    }));
    const stationsWithResult: StationWithResultInterface[] = [];
    for (const station of stations) {
      const lastStationResult = await this.determineLastStationResult(station, results);
      const stationWithResult = new StationWithResultBuilder(station, lastStationResult).instance;
      stationsWithResult.push(stationWithResult);
    }
    return stationsWithResult;
  }

  private async determineLastStationResult(station: DatabaseStationInterface, results: ResultInterface[]): Promise<ResultInterface> {
    const lastStationResult = results.find(result => result.stationId === station._id.toString());
    if (lastStationResult) {
      return lastStationResult;
    }
    const lastStationResults = await this.queryBus.execute(new ResultFindQuery({
      conditions: {
        stationId: station._id.toString()
      },
      options: {
        lean: true,
        limit: 1,
        sort: {measurementDate: -1}
      }
    }));
    return lastStationResults.pop();
  }
}