import * as mongoose from 'mongoose';

export const ClassifierIndexAmountSchema = new mongoose.Schema({
  bad: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  good: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  moderate: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  sufficient: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  undefined: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  veryBad: {type: mongoose.Schema.Types.Mixed, required: true, default: 0},
  veryGood: {type: mongoose.Schema.Types.Mixed, required: true, default: 0}
}, {_id: false});