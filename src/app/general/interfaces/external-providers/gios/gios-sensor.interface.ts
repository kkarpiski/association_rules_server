interface ParamInterface {
  idParam: number;
  paramCode: string;
  paramFormula: string;
  paramName: string;
}

export interface GiosSensorInterface {
  id: number;
  param: ParamInterface;
  stationId: number;
}