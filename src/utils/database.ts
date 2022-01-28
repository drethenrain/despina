import mongoose from 'mongoose';

import { MONGO_URI } from './constants';

export const connect = () => {
  mongoose.Promise = global.Promise;

  mongoose.connect(MONGO_URI);

  mongoose.connection
    .on('connected', () => console.log('[DATABASE] MongoDB Connected'))
    .on('reconnected', () => console.log('[DATABASE] MongoDB Reconnected'))
    .on('error', err => console.log(err));
};
