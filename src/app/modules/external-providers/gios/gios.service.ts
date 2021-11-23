import {BadRequestException, Injectable} from '@nestjs/common';
import axios from 'axios';
import {
  GiosSensorDataInterface,
  GiosSensorInterface, GiosStationIndexInterface,
  GiosStationInterface
} from '../../../general/interfaces/external-providers/gios';
import {AppLogger} from '../../../general/logger/logger';

@Injectable()
export class GIOSService {
  private readonly apiBaseAddress = 'https://api.gios.gov.pl/pjp-api/rest/';
  private readonly appLogger = new AppLogger(GIOSService.name);

  public async findAllStations(): Promise<GiosStationInterface[]> {
    try {
      const response = await axios.get(`${this.apiBaseAddress}station/findAll`);
      return response.data;
    } catch (exception) {
      this.appLogger.error('[findAllStations] Something went wrong during fetching stations', exception);
      throw new BadRequestException('Fetching stations failed');
    }
  }

  public async findSensors(stationId: number): Promise<GiosSensorInterface[]> {
    try {
      const response = await axios.get(`${this.apiBaseAddress}station/sensors/${stationId}`);
      return response.data;
    } catch (exception) {
      this.appLogger.error('[findSensors] Something went wrong during fetching sensors', exception);
      throw new BadRequestException('Fetching sensors failed');
    }
  }

  public async getSensorData(sensorId: number): Promise<GiosSensorDataInterface> {
    try {
      const response = await axios.get(`${this.apiBaseAddress}data/getData/${sensorId}`);
      return response.data;
    } catch (exception) {
      this.appLogger.error('[getSensorData] Something went wrong during fetching sensor data', exception);
      throw new BadRequestException('Fetching sensor data failed');
    }
  }

  public async getStationIndex(stationId: number): Promise<GiosStationIndexInterface> {
    try {
      const response = await axios.get(`${this.apiBaseAddress}aqindex/getIndex/${stationId}`);
      return response.data;
    } catch (exception) {
      this.appLogger.error('[getStationIndex] Something went wrong during fetching station index', exception);
      throw new BadRequestException('Fetching station index failed');
    }
  }
}