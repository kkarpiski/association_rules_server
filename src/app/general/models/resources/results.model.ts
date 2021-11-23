import {ResultsInterface} from '../../interfaces/resources';

export class ResultsModel {

  constructor(
    private readonly result: ResultsInterface
  ) {
  }

  public getInstance(): ResultsInterface {
    return this.result;
  }
}