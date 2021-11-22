import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {StationInterface} from '../../../../../general/interfaces/resources';
import {StationsService} from '../../services/stations.service';
import {StationFindOneAndUpdateCommand} from '../implementations';

@CommandHandler(StationFindOneAndUpdateCommand)
export class StationFindOneAndUpdateHandler implements ICommandHandler<StationFindOneAndUpdateCommand> {

  constructor(
    private readonly stationsService: StationsService
  ) {
  }

  public async execute({updateData}: StationFindOneAndUpdateCommand): Promise<StationInterface> {
    return await this.stationsService.findOneAndUpdate(updateData);
  }
}
