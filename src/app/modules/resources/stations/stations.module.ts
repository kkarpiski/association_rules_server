import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../../database/database.module';
import {ResultsModule} from '../results/results.module';
import {commandHandlers} from './commands/handlers';
import {controllers} from './controllers';
import {services} from './services';
import {stationsProviders} from './stations.providers';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule,
    ResultsModule
  ],
  providers: [
    ...commandHandlers,
    ...services,
    ...stationsProviders
  ],
  exports: [
    ...commandHandlers
  ],
  controllers: [
    ...controllers
  ]
})
export class StationsModule {
}