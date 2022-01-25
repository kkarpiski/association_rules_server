import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {GIOSService} from '../../../gios/gios.service';
import {GiosStationInterface} from '../../../../../general/interfaces/external-providers/gios';
import {FindWeatherQuery} from '../implementations/find_weather.query';

@QueryHandler(FindWeatherQuery)
export class FindWeatherHandler implements IQueryHandler<FindWeatherHandler> {

    constructor(
        private readonly giosService: GIOSService
    ) {
    }

    public async execute(): Promise<GiosStationInterface[]> {
        return this.giosService.findAllStations();
    }
}
