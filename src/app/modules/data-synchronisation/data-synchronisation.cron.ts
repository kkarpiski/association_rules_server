import {Injectable} from '@nestjs/common';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {Cron} from '@nestjs/schedule';
import {GIOSDataToStationAdapter} from '../../general/adapters/resources';
import {ResultsBuilder} from '../../general/builders/resources';
import {DatabaseStationInterface} from '../../general/interfaces/database-resources';
import {GiosSensorDataInterface, GiosStationInterface} from '../../general/interfaces/external-providers/gios';
import {StationInterface} from '../../general/interfaces/resources';
import {AppLogger} from '../../general/logger/logger';
import {ClassifierConfigModel} from '../../general/models/classifier-config';
import {ResultModel} from '../../general/models/resources';
import {ClassifierConfigFindCurrentQuery} from '../classifier-config/queries/implementations';
import {
  FindAllStationsQuery,
  FindSensorsQuery,
  GetSensorDataQuery
} from '../external-providers/gios/queries/implementations';
import {ResultFindOneAndUpdateCommand} from '../resources/results/commands/implementations';
import {StationFindOneAndUpdateCommand} from '../resources/stations/commands/implementations';

@Injectable()
export class DataSynchronisationCron {
  private readonly logger = new AppLogger(DataSynchronisationCron.name);

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {
  }

  @Cron('1 15 * * * *')
  public async SynchroniseDataWithGIOS(): Promise<void> {
    this.logger.debug('[SynchroniseDataWithGIOS] starting...');
    const stations = await this.getMappedStations();
    for (const station of stations) {
      const databaseStation = await this.createAndGetStation(station);
      await this.synchroniseStationResults(databaseStation);
    }
    this.logger.debug('[SynchroniseDataWithGIOS] finishing...');
  }

  private async synchroniseStationResults(station: DatabaseStationInterface): Promise<void> {
    const {externalId} = station;
    const sensors = await this.queryBus.execute(new FindSensorsQuery(+externalId));
    const resultPromises: Promise<GiosSensorDataInterface>[] = [];
    for (const sensor of sensors) {
      const {id} = sensor;
      const sensorPromise = this.queryBus.execute(new GetSensorDataQuery(id));
      resultPromises.push(sensorPromise);
    }
    const sensorsData = await Promise.all(resultPromises);
    const classifierConfig = await this.queryBus.execute(new ClassifierConfigFindCurrentQuery());
    const results = new ResultsBuilder({
      classifierConfigModel: new ClassifierConfigModel(classifierConfig),
      results: sensorsData,
      station: station
    }).getResults();
    for (const result of results) {
      const resultModel = new ResultModel(result);
      const createData = resultModel.getCreateData();
      if (!createData) {
        continue;
      }
      const measurementDate = resultModel.getMeasurementDate();
      const stationId = resultModel.getStationId();
      await this.commandBus.execute(new ResultFindOneAndUpdateCommand({
        conditions: {stationId, measurementDate},
        update: {$set: createData},
        options: {upsert: true, useFindAndModify: false}
      }));
    }
  }

  private async createAndGetStation(station: StationInterface): Promise<DatabaseStationInterface> {
    const {externalId, stationName} = station;
    return this.commandBus.execute(new StationFindOneAndUpdateCommand({
      conditions: {externalId},
      update: {$set: {externalId, stationName}},
      options: {upsert: true, new: true, useFindAndModify: false}
    }));
  }

  private async getMappedStations(): Promise<StationInterface[]> {
    const giosStations = await this.getStations();
    return giosStations.map(giosStation => new GIOSDataToStationAdapter(giosStation).getStation());
  }

  private async getStations(): Promise<GiosStationInterface[]> {
    try {
      return await this.queryBus.execute(new FindAllStationsQuery());
    } catch (exception) {
      this.logger.error('[getStations] Data not fetched', exception);
      return [];
    }
  }
}