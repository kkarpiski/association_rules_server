import * as mongoose from 'mongoose';
import {ResultsIndexesEnum} from '../../../../general/enums';
import {ResultsSchema} from './results.schema';
import {WeatherReaultsIndexesEnum} from '../../../../general/enums/weather_reaults_Indexes.enum';

export const ResultSchema = new mongoose.Schema({
  airQualityIndex: {type: String, enum: Object.values(ResultsIndexesEnum), immutable: true},
  bayesClassifiedAirQualityIndex: {type: String, enum: Object.values(ResultsIndexesEnum)},
  weatherDate: {type: String, enum: Object.values(WeatherReaultsIndexesEnum)},
  measurementDate: {type: Date, immutable: true},
  results: {type: ResultsSchema, immutable: true},
  stationId: {type: String, immutable: true}
}, {timestamps: {createdAt: true, updatedAt: true}});

ResultSchema.index({measurementDate: -1});