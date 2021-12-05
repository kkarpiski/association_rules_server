import * as mongoose from 'mongoose';
import {ResultKeysEnum, ResultsIndexesEnum} from '../../../general/enums';

export const ClassifierDataSchema = new mongoose.Schema({
  amountOfDefinedValues: {type: Number, required: true, default: 0},
  amountOfUndefinedValues: {type: Number, required: true, default: 0},
  indexOfData: {type: String, enum: Object.values(ResultsIndexesEnum), required: true},
  mean: {type: mongoose.Schema.Types.Mixed, required: true},
  standardDeviation: {type: mongoose.Schema.Types.Mixed, required: true},
  typeOfData: {type: String, enum: Object.values(ResultKeysEnum), required: true}
}, {_id: false});