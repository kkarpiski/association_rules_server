import {Global, Module} from '@nestjs/common';
import {databaseProviders} from './database.providers';

@Global()
@Module({
  providers: [
    ...databaseProviders
  ]
})
export class DatabaseModule {
}
