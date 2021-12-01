import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {DatabaseModule} from '../../database/database.module';
import {ResultsModule} from '../resources/results/results.module';
import {classifierConfigProviders} from './classifier-config.providers';
import {controllers} from './controllers';
import {services} from './services';

@Module({
  providers: [
    ...classifierConfigProviders,
    ...services
  ],
  controllers: [
    ...controllers
  ],
  imports: [
    CqrsModule,
    DatabaseModule,
    ResultsModule
  ]
})
export class ClassifierConfigModule {
}