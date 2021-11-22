interface IndexLevelInterface {
  id: number;
  indexLevelName: string;
}

export interface GiosStationIndexInterface {
  id: number;
  no2CalcDate: string;
  no2IndexLevel: IndexLevelInterface;
  no2SourceDataDate: string;
  o3CalcDate: string;
  o3IndexLevel: IndexLevelInterface;
  o3SourceDataDate: string;
  pm10CalcDate: string;
  pm10IndexLevel: IndexLevelInterface;
  pm10SourceDataDate: string;
  pm25CalcDate: string;
  pm25IndexLevel: IndexLevelInterface;
  pm25SourceDataDate: string;
  so2CalcDate: string;
  so2IndexLevel: IndexLevelInterface;
  so2SourceDataDate: string;
  stCalcDate: string;
  stIndexCrParam: string;
  stIndexLevel: IndexLevelInterface;
  stIndexStatus: boolean;
  stSourceDataDate: string;
}