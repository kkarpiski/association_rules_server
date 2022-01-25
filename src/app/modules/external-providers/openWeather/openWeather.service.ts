import axios from 'axios';
import {AppLogger} from '../../../general/logger/logger';
import {BadRequestException, Get, Injectable} from '@nestjs/common';
import {OpenWeatherInterface} from '../../../general/interfaces/external-providers/openWeather';
import {GiosStationInterface} from '../../../general/interfaces/external-providers/gios';


@Injectable()
export class OpenWeatherService {
    private ApiKey = '965da2d6960fddd34e98e126cc14b583';
    private readonly apiBaseAddress = 'https://api.openweathermap.org/data/2.5/weather?';
    private readonly appLogger = new AppLogger(OpenWeatherService.name);


    public async getWeather(gegrLat, gegrLon: string): Promise<GiosStationInterface[]>{
        try {
            const response = await axios.get(`${this.apiBaseAddress}lat=${gegrLat}lon=${gegrLon}appid=`+ this.ApiKey);
            return response.data;
        } catch (exception) {
            this.appLogger.error('[findSensors] Something went wrong during fetching Lat & Lon param', exception);
            throw new BadRequestException('Fetching Lat & Lon param failed');
        }
    }
}

