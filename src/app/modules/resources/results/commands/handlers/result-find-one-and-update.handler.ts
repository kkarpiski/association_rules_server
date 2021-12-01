import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {DatabaseResultInterface} from '../../../../../general/interfaces/database-resources';
import {ResultsService} from '../../services/results.service';
import {ResultFindOneAndUpdateCommand} from '../implementations';

@CommandHandler(ResultFindOneAndUpdateCommand)
export class ResultFindOneAndUpdateHandler implements ICommandHandler<ResultFindOneAndUpdateCommand> {

  constructor(
    private readonly resultService: ResultsService
  ) {
  }

  public async execute({updateData}: ResultFindOneAndUpdateCommand): Promise<DatabaseResultInterface> {
    return this.resultService.findOneAndUpdate(updateData);
  }
}
