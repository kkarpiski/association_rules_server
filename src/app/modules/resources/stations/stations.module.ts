import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../../database/database.module';
import {commandHandlers} from './commands/handlers';
import {services} from './services';
import {stationsProviders} from './stations.providers';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule
  ],
  providers: [
    ...commandHandlers,
    ...services,
    ...stationsProviders
  ],
  exports: [
    ...commandHandlers
  ]
})
export class StationsModule {
}