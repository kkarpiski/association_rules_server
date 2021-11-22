import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {ResultInterface} from '../../../../../general/interfaces/resources';
import {ResultsService} from '../../services/results.service';
import {ResultFindOneAndUpdateCommand} from '../implementations';

@CommandHandler(ResultFindOneAndUpdateCommand)
export class ResultFindOneAndUpdateHandler implements ICommandHandler<ResultFindOneAndUpdateCommand> {

  constructor(
    private readonly resultService: ResultsService
  ) {
  }

  public async execute({updateData}: ResultFindOneAndUpdateCommand): Promise<ResultInterface> {
    return await this.resultService.findOneAndUpdate(updateData);
  }
}
