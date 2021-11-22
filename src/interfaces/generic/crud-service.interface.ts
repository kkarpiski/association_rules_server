import {Model, Document} from 'mongoose';
import {ResourcesNameEnum} from '../../enums';

export interface CrudServiceInterface<T extends Document> {
  repository: Model<T>;
  serviceName: string;
  resourceName: ResourcesNameEnum;
  loggerStream?: string;
}
