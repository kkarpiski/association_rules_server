import {Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import {Cron} from '@nestjs/schedule';
import {FindAllStationsQuery} from '../external-providers/gios/queries/implementations';

@Injectable()
export class DataSynchronisationCron {

  constructor(
    private readonly queryBus: QueryBus
  ) {
  }

  @Cron('* 1 * * * *')
  public async SynchroniseData(): Promise<void> {
    const stations = await this.queryBus.execute(new FindAllStationsQuery());
    console.log(stations);
  }
}