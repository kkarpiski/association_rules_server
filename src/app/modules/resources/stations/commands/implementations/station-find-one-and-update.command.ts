import {FindOneAndUpdateInterface} from '../../../../../general/interfaces/crud';

export class StationFindOneAndUpdateCommand {
  constructor(
    public readonly updateData: FindOneAndUpdateInterface
  ) {
  }
}
