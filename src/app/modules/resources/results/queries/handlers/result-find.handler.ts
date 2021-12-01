import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {DatabaseResultInterface} from '../../../../../general/interfaces/database-resources';
import {ResultsService} from '../../services/results.service';
import {ResultFindQuery} from '../implementations';

@QueryHandler(ResultFindQuery)
export class ResultFindHandler implements IQueryHandler<ResultFindQuery> {

  constructor(
    private readonly resultService: ResultsService
  ) {
  }

  public async execute({fetchData}: ResultFindQuery): Promise<DatabaseResultInterface[]> {
    return this.resultService.find(fetchData);
  }
}
