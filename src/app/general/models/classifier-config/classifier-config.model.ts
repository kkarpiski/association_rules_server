import {DatabaseClassifierConfigInterface} from '../../interfaces/database-resources';

export class ClassifierConfigModel {

  constructor(
    private readonly classifierConfig: DatabaseClassifierConfigInterface
  ) {
    //TODO: add validation if classifier config exists
  }

  public get instance(): DatabaseClassifierConfigInterface {
    return this.classifierConfig;
  }
}