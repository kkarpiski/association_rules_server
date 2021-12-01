import {FindInterface} from '../../../../../general/interfaces/crud';

export class ResultFindQuery {
  constructor(
    public readonly fetchData: FindInterface
  ) {
  }
}
