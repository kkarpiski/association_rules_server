import {Inject, Injectable} from '@nestjs/common';
import {QueryBus} from '@nestjs/cqrs';
import {Model} from 'mongoose';
import {ClassifierConfigBuilder} from '../../../general/builders/classifier-config';
import {CLASSIFIER_CONFIG_TOKEN} from '../../../general/constants';
import {ClassifierConfigCreateParamsInterface} from '../../../general/interfaces/classifier-config';
import {DatabaseClassifierConfigInterface} from '../../../general/interfaces/database-resources';
import {CrudService} from '../../../general/services';
import {ResultFindQuery} from '../../resources/results/queries/implementations';

@Injectable()
export class ClassifierConfigService extends CrudService<DatabaseClassifierConfigInterface> {

  constructor(
    @Inject(CLASSIFIER_CONFIG_TOKEN) private readonly classifierConfigModel: Model<DatabaseClassifierConfigInterface>,
    private readonly queryBus: QueryBus
  ) {
    super(classifierConfigModel);
  }

  public async findCurrentClassifierConfig(): Promise<DatabaseClassifierConfigInterface> {
    return this.findOne({
      conditions: {
        isCurrent: true
      },
      options: {lean: true}
    });
  }

  public async createClassifierConfig({trainingSetSize, ...restParams}: ClassifierConfigCreateParamsInterface): Promise<DatabaseClassifierConfigInterface> {
    const results = await this.queryBus.execute(new ResultFindQuery({
      projection: ['airQualityIndex', 'measurementDate', 'results'],
      options: {
        lean: true,
        limit: trainingSetSize,
        sort: {measurementDate: -1}
      }
    }));
    const newClassifierConfig = new ClassifierConfigBuilder(
      {trainingSetSize, ...restParams},
      results
    ).instance;
    await this.updateMany({
      conditions: {},
      update: {$set: {isCurrent: false}}
    });
    return this.create({
      doc: newClassifierConfig
    });
  }
}