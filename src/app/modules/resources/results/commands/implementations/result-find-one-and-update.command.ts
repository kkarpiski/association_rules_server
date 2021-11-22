import {FindOneAndUpdateInterface} from '../../../../../general/interfaces/crud';

export class ResultFindOneAndUpdateCommand {
  constructor(
    public readonly updateData: FindOneAndUpdateInterface
  ) {
  }
}
