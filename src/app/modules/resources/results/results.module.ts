import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../../database/database.module';
import {commandHandlers} from './commands/handlers';
import {resultsProviders} from './results.providers';
import {services} from './services';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule
  ],
  providers: [
    ...commandHandlers,
    ...resultsProviders,
    ...services
  ],
  exports: [
    ...commandHandlers
  ]
})
export class ResultsModule {
}