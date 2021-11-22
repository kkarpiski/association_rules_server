import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {RESULTS_TOKEN} from '../../../../general/constants';
import {DatabaseResultInterface} from '../../../../general/interfaces/database-resources';
import {CrudService} from '../../../../general/services';

@Injectable()
export class ResultsService extends CrudService<DatabaseResultInterface> {

  constructor(
    @Inject(RESULTS_TOKEN) private readonly resultModel: Model<DatabaseResultInterface>
  ) {
    super(resultModel);
  }
}