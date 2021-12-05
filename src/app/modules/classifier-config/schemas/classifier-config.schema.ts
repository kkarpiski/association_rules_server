import * as mongoose from 'mongoose';
import {ClassifierDataSchema} from './classifier-data.schema';
import {ClassifierIndexAmountSchema} from './classifier-index-amount.schema';

export const ClassifierConfigSchema = new mongoose.Schema({
  classifierData: {type: [ClassifierDataSchema], default: [], required: true},
  classifierIndexesAmount: {type: ClassifierIndexAmountSchema, required: true},
  isCurrent: {type: Boolean, default: false, required: true},
  name: {type: String, required: true},
  positiveResults: {type: Number, default: 0, required: true},
  testsAmount: {type: Number, default: 0, required: true},
  trainingSetSize: {type: Number, default: 0, required: true}
}, {timestamps: {createdAt: true, updatedAt: true}});