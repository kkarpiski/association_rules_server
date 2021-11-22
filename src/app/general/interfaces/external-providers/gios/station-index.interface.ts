interface IndexLevelInterface {
  id: number;
  indexLevelName: string;
}

export interface StationIndexInterface {
  id: number;
  stCalcDate: string;
  stIndexLevel: IndexLevelInterface;
  stSourceDataDate: string;
  so2CalcDate: string;
  so2IndexLevel: IndexLevelInterface;
  so2SourceDataDate: string;
  no2CalcDate: string;
  no2IndexLevel: IndexLevelInterface;
  no2SourceDataDate: string;
  pm10CalcDate: string;
  pm10IndexLevel: IndexLevelInterface;
  pm10SourceDataDate: string;
  pm25CalcDate: string;
  pm25IndexLevel: IndexLevelInterface;
  pm25SourceDataDate: string;
  o3CalcDate: string;
  o3IndexLevel: IndexLevelInterface;
  o3SourceDataDate: string;
  stIndexStatus: boolean;
  stIndexCrParam: string;
}