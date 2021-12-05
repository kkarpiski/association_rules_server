import {FindOneAndUpdateInterface} from '../../../../general/interfaces/crud';

export class ClassifierConfigFindOneAndUpdateCommand {
  constructor(
    public readonly updateData: FindOneAndUpdateInterface
  ) {
  }
}