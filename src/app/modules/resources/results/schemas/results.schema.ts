import * as mongoose from 'mongoose';

export const ResultsSchema = new mongoose.Schema({
  C6H6: {type: Number, default: null, immutable: true},
  CO: {type: Number, default: null, immutable: true},
  NO2: {type: Number, default: null, immutable: true},
  O3: {type: Number, default: null, immutable: true},
  PM10: {type: Number, default: null, immutable: true},
  PM25: {type: Number, default: null, immutable: true},
  SO2: {type: Number, default: null, immutable: true}
}, {_id: false});