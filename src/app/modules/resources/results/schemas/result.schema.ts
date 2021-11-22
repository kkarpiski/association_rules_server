import * as mongoose from 'mongoose';
import {ResultsIndexesEnum} from '../../../../general/enums';
import {ResultsSchema} from './results.schema';

export const ResultSchema = new mongoose.Schema({
  bayesClassifierIndex: {type: String, enum: Object.values(ResultsIndexesEnum)},
  index: {type: String, enum: Object.values(ResultsIndexesEnum), immutable: true},
  results: {type: ResultsSchema, immutable: true},
  stationId: {type: String, immutable: true}
}, {timestamps: {createdAt: true, updatedAt: true}});