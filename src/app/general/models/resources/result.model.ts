import {ResultInterface} from '../../interfaces/resources';
import {DateTime} from 'luxon';

export class ResultModel {

  public constructor(
    private readonly result: ResultInterface
  ) {
  }

  public getResultInstance(): ResultInterface {
    return this.result;
  }

  public getMeasurementDate(): DateTime {
    return this.getResultInstance().measurementDate;
  }

  public getStationId(): string {
    return this.getResultInstance().stationId;
  }

  public getCreateData(): ResultInterface | null {
    if (!this.isValidToBeCreated()) {
      return null;
    }
    return this.getResultInstance();
  }

  private isValidToBeCreated(): boolean {
    const {result} = this;
    const {results} = result;
    for (const key in results) {
      if (results[key]) {
        return true;
      }
    }
    return false;
  }
}