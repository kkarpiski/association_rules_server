import {Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import {GIOSService} from './gios.service';
import {queryHandlers} from './queries/handlers';

@Module({
  providers: [
    GIOSService,
    ...queryHandlers
  ],
  exports: [
    ...queryHandlers
  ],
  imports: [
    CqrsModule
  ]
})
export class GIOSModule {
}