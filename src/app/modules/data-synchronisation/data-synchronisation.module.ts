import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {ScheduleModule} from '@nestjs/schedule';
import {GIOSModule} from '../external-providers/gios/gios.module';
import {DataSynchronisationCron} from './data-synchronisation.cron';

@Module({
  imports: [
    CqrsModule,
    ScheduleModule.forRoot(),
    GIOSModule
  ],
  providers: [
    DataSynchronisationCron
  ]
})
export class DataSynchronisationModule {
}