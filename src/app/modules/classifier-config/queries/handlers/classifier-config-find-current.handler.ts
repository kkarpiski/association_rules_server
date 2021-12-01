import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {DatabaseClassifierConfigInterface} from '../../../../general/interfaces/database-resources';
import {ClassifierConfigService} from '../../services/classifier-config.service';
import {ClassifierConfigFindCurrentQuery} from '../implementations';

@QueryHandler(ClassifierConfigFindCurrentQuery)
export class ClassifierConfigFindCurrentHandler implements IQueryHandler<ClassifierConfigFindCurrentQuery> {

  constructor(
    private readonly classifierConfigService: ClassifierConfigService
  ) {
  }

  public async execute({}: ClassifierConfigFindCurrentQuery): Promise<DatabaseClassifierConfigInterface> {
    return this.classifierConfigService.findCurrentClassifierConfig();
  }
}
