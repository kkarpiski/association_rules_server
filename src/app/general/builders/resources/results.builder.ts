import {DatabaseStationInterface} from '../../interfaces/database-resources';
import {GiosSensorDataInterface, GiosStationIndexInterface} from '../../interfaces/external-providers/gios';
import {ResultInterface} from '../../interfaces/resources';

interface ResultBuilderParamsInterface {
  index: GiosStationIndexInterface;
  results: GiosSensorDataInterface[][];
  station: DatabaseStationInterface;
}

export class ResultsBuilder {
  private readonly results: ResultInterface[] = [];

  constructor(
    private readonly data: ResultBuilderParamsInterface
  ) {
  }
}

