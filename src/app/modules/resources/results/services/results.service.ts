import {Inject, Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {RESULTS_TOKEN} from '../../../../general/constants';
import {ResultInterface} from '../../../../general/interfaces/resources';
import {CrudService} from '../../../../general/services';

@Injectable()
export class ResultsService extends CrudService<ResultInterface> {

  constructor(
    @Inject(RESULTS_TOKEN) private readonly resultModel: Model<ResultInterface>
  ) {
    super(resultModel);
  }
}