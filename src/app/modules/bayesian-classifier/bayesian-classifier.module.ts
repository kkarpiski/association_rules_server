import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {ClassifierConfigModule} from '../classifier-config/classifier-config.module';
import {controllers} from './controllers';
import {services} from './services';

@Module({
  providers: [
    ...services
  ],
  controllers: [
    ...controllers
  ],
  imports: [
    CqrsModule,
    ClassifierConfigModule
  ]
})
export class BayesianClassifierModule {
}