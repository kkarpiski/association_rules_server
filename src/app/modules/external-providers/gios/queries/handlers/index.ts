import {FindAllStationsHandler} from './find-all-stations.handler';
import {FindSensorsHandler} from './find-sensors.handler';
import {GetSensorDataHandler} from './get-sensor-data.handler';
import {GetStationIndexHandler} from './get-station-index.handler';


export const queryHandlers = [
  FindAllStationsHandler,
  FindSensorsHandler,
  GetSensorDataHandler,
  GetStationIndexHandler
];