interface DateValueInterface {
  date: string;
  value: number;
}

export interface GiosSensorDataInterface {
  key: string;
  values: DateValueInterface[];
}