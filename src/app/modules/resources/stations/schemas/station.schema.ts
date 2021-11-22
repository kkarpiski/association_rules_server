import * as mongoose from 'mongoose';

export const StationSchema = new mongoose.Schema({
  externalId: {type: String, immutable: true},
  stationName: {type: String, immutable: true}
}, {timestamps: {createdAt: true, updatedAt: true}});