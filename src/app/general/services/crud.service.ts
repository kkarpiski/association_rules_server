import {Injectable} from '@nestjs/common';
import {Document, Model} from 'mongoose';
import {
  CountInterface,
  CreateInterface,
  DeleteManyInterface,
  FindInterface,
  FindOneAndDeleteInterface,
  FindOneAndUpdateInterface,
  FindOneInterface, UpdateManyInterface
} from '../interfaces/crud';

@Injectable()
export class CrudService<T extends Document> {

  constructor(
    private readonly repositoryModel
  ) {}

  public async findOne({conditions, projection, options}: FindOneInterface): Promise<T> {
    return this.repositoryModel.findOne(conditions, projection, options);
  }

  public async find({conditions, projection, options}: FindInterface): Promise<T[]> {
    return this.repositoryModel.find(conditions, projection, options);
  }

  public async create({doc, options}: CreateInterface): Promise<T> {
    return this.repositoryModel.create(doc, options);
  }

  public async findOneAndUpdate({conditions, update, options}: FindOneAndUpdateInterface): Promise<T> {
    console.log(JSON.stringify(update));
    const result = await this.repositoryModel.findOneAndUpdate(conditions, update, options);
    console.log(JSON.stringify(result));
    return result;
  }

  public async updateMany({conditions, update, options}: UpdateManyInterface): Promise<T> {
    return this.repositoryModel.updateMany(conditions, update, options);
  }

  public async count({conditions}: CountInterface): Promise<number> {
    return this.repositoryModel.countDocuments(conditions);
  }

  public async deleteMany({conditions, options}: DeleteManyInterface): Promise<T> {
    return this.repositoryModel.deleteMany(conditions, options);
  }

  public async findOneAndDelete({conditions, options}: FindOneAndDeleteInterface): Promise<T> {
    return this.repositoryModel.findOneAndDelete(conditions, options);
  }
}
