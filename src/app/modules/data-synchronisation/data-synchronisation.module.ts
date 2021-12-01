import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {ScheduleModule} from '@nestjs/schedule';
import {ClassifierConfigModule} from '../classifier-config/classifier-config.module';
import {GIOSModule} from '../external-providers/gios/gios.module';
import {ResultsModule} from '../resources/results/results.module';
import {StationsModule} from '../resources/stations/stations.module';
import {DataSynchronisationCron} from './data-synchronisation.cron';

@Module({
  imports: [
    CqrsModule,
    ScheduleModule.forRoot(),
    GIOSModule,
    ClassifierConfigModule,
    StationsModule,
    ResultsModule
  ],
  providers: [
    DataSynchronisationCron
  ]
})
export class DataSynchronisationModule {
}