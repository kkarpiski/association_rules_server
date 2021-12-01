import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppLogger} from './general/logger/logger';
import {BayesianClassifierModule} from './modules/bayesian-classifier/bayesian-classifier.module';
import {ClassifierConfigModule} from './modules/classifier-config/classifier-config.module';
import {DataSynchronisationModule} from './modules/data-synchronisation/data-synchronisation.module';
import {StationsModule} from './modules/resources/stations/stations.module';

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
    BayesianClassifierModule,
    ClassifierConfigModule,
    StationsModule
  ]
})
export class AppModule {
}
