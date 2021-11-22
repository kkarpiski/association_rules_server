import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppLogger} from './general/logger/logger';
import {DataSynchronisationModule} from './modules/data-synchronisation/data-synchronisation.module';

@Module({
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    AppLogger
  ],
  imports: [
    DataSynchronisationModule
  ]
})
export class AppModule {
}
