import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../../database/database.module';
import {commandHandlers} from './commands/handlers';
import {queryHandlers} from './queries/handlers';
import {resultsProviders} from './results.providers';
import {services} from './services';

@Module({
  imports: [
    CqrsModule,
    DatabaseModule
  ],
  providers: [
    ...commandHandlers,
    ...queryHandlers,
    ...resultsProviders,
    ...services
  ],
  exports: [
    ...commandHandlers,
    ...queryHandlers
  ]
})
export class ResultsModule {
}