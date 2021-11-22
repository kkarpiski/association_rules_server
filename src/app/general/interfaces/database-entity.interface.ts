import mongoose from 'mongoose';

export interface DatabaseEntityInterface extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
