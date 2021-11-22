interface ParamInterface {
  idParam: number;
  paramCode: string;
  paramFormula: string;
  paramName: string;
}

export interface SensorInterface {
  id: number;
  param: ParamInterface;
  stationId: number;
}