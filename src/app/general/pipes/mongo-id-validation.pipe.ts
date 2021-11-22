import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongoIdValidationPipe implements PipeTransform<string, string> {
  transform(id: string, metadata: ArgumentMetadata): string {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Id not valid');
    }
    return id;
  }
}
