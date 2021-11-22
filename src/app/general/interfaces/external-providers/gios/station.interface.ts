interface CommuneInterface {
  communeName: string;
  districtName: string;
  provinceName: string;
}

interface CityInterface {
  commune: CommuneInterface;
  id: number;
  name: string;
}

export interface StationInterface {
  addressStreet: string;
  city: CityInterface;
  gegrLat: string;
  gegrLon: string;
  id: number;
  stationName: string;
}