import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppLogger} from './general/logger/logger';
import {ClassifierConfigModule} from './modules/classifier-config/classifier-config.module';
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
    DataSynchronisationModule,
    ClassifierConfigModule
  ]
})
export class AppModule {
}
