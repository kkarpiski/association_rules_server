import {INestApplication, INestMicroservice, ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {json, urlencoded} from 'body-parser';
import {useContainer} from 'class-validator';
import cors from 'cors';
import {AppModule} from './app.module';
import {dispatchDataConfig} from './configs';
import {AppLogger} from './services/loggers';

export class AppDispatcher {
  private app: INestApplication;
  private microService: INestMicroservice;
  private readonly logger = new AppLogger(AppDispatcher.name);

  async dispatch(): Promise<void> {
    await this.createServer();
    this.createMicroServices();
    await this.startMicroServices();
    return this.startServer();
  }

  async shutdown(): Promise<void> {
    await this.app.close();
  }

  private async createServer(): Promise<void> {
    this.app = await NestFactory.create<INestApplication>(AppModule);
    this.app.useLogger(this.app.get(AppLogger));

    useContainer(this.app.select(AppModule), {fallbackOnErrors: true});
    this.app.use(cors());
    this.app.useGlobalPipes(new ValidationPipe());

    this.app.use(json({limit: '10mb'}));
    this.app.use(urlencoded({limit: '10mb', extended: true}));
  }

  private createMicroServices(): void {
    this.microService = this.app.connectMicroservice(dispatchDataConfig.microService);
  }

  private startMicroServices(): Promise<void> {
    return this.app.startAllMicroservicesAsync();
  }

  public async startServer(): Promise<void> {
    const port = dispatchDataConfig.port;
    const host = dispatchDataConfig.host;
    await this.app.listen(port, host);

    this.logger.log(`Server is listening http://${host}:${port}`);
    this.logger.log(`Swagger is exposed at http://${host}:${port}/swagger`);
    this.logger.log(`Swagger-stats are exposed at http://${host}:${port}/swagger-stats/ui`);
  }
}
