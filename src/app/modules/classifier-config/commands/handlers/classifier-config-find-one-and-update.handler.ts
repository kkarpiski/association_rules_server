import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {DatabaseClassifierConfigInterface} from '../../../../general/interfaces/database-resources';
import {ClassifierConfigService} from '../../services/classifier-config.service';
import {ClassifierConfigFindOneAndUpdateCommand} from '../implementations';

@CommandHandler(ClassifierConfigFindOneAndUpdateCommand)
export class ClassifierConfigFindOneAndUpdateHandler implements ICommandHandler<ClassifierConfigFindOneAndUpdateCommand> {

  constructor(
    private readonly classifierConfigService: ClassifierConfigService
  ) {
  }

  public async execute({updateData}: ClassifierConfigFindOneAndUpdateCommand): Promise<DatabaseClassifierConfigInterface> {
    return this.classifierConfigService.findOneAndUpdate(updateData);
  }
}
