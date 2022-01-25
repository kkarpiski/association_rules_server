import {GiosStationInterface} from '../../interfaces/external-providers/gios';
import {StationInterface} from '../../interfaces/resources';

export class GIOSDataToStationAdapter {
  private readonly station: StationInterface;

  constructor(
    private readonly giosStation: GiosStationInterface
  ) {
    this.station = this.transformGIOSStation();
  }

  public getStation(): StationInterface {
    return this.station;
  }

  private transformGIOSStation(): StationInterface {
    const {giosStation} = this;
    const {id, stationName, gegrLat, gegrLon} = giosStation;
    return {
      externalId: id.toString(),
      stationName,
      gegrLat: gegrLat.toString(),
      gegrLon: gegrLon.toString(),
      weatherData: 'Temp: , Wilgotność: , Prędkość wiatru: '
    } as StationInterface;
  }
}