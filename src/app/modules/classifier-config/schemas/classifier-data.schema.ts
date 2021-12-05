import * as mongoose from 'mongoose';
import {ResultKeysEnum, ResultsIndexesEnum} from '../../../general/enums';

export const ClassifierDataSchema = new mongoose.Schema({
  amountOfDefinedValues: {type: Number, required: true},
  indexOfData: {type: String, enum: Object.values(ResultsIndexesEnum), required: true},
  mean: {type: Number, required: true},
  standardDeviation: {type: Number, required: true},
  typeOfData: {type: String, enum: Object.values(ResultKeysEnum), required: true}
}, {_id: false});