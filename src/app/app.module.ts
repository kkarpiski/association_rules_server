import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppLogger} from './general/logger/logger';

@Module({
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    AppLogger
  ]
})
export class AppModule {
}
