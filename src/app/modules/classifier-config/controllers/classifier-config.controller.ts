import {Body, Controller, Get, Post} from '@nestjs/common';
import {ClassifierConfigCreateDto} from '../../../general/dtos/classifier-config';
import {DatabaseClassifierConfigInterface} from '../../../general/interfaces/database-resources';
import {ClassifierConfigService} from '../services/classifier-config.service';

@Controller('classifier-config')
export class ClassifierConfigController {

  constructor(
    private readonly classifierConfigService: ClassifierConfigService
  ) {
  }

  @Get('current')
  public async getClassifierConfig(): Promise<DatabaseClassifierConfigInterface> {
    return this.classifierConfigService.findCurrentClassifierConfig();
  }

  @Post()
  public async createClassifierConfig(
    @Body() classifierCreateData: ClassifierConfigCreateDto
  ): Promise<DatabaseClassifierConfigInterface> {
    return this.classifierConfigService.createClassifierConfig(classifierCreateData);
  }
}
