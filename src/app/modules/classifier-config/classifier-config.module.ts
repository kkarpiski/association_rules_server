import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../database/database.module';
import {ResultsModule} from '../resources/results/results.module';
import {classifierConfigProviders} from './classifier-config.providers';
import {controllers} from './controllers';
import {queryHandlers} from './queries/handlers';
import {services} from './services';

@Module({
  providers: [
    ...classifierConfigProviders,
    ...queryHandlers,
    ...services
  ],
  controllers: [
    ...controllers
  ],
  imports: [
    CqrsModule,
    DatabaseModule,
    ResultsModule
  ],
  exports: [
    ...queryHandlers
  ]
})
export class ClassifierConfigModule {
}