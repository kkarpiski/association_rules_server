interface DateValueInterface {
  date: string;
  value: number;
}

export interface SensorDataInterface {
  key: string;
  values: DateValueInterface;
}