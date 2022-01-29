import mongoose from 'mongoose';

export const connect = () => {
  mongoose.Promise = global.Promise;

  mongoose.connect(process.env.MONGO_URI as string);

  mongoose.connection
    .on('connected', () => console.log('[DATABASE] MongoDB Connected'))
    .on('reconnected', () => console.log('[DATABASE] MongoDB Reconnected'))
    .on('error', err => console.log(err));
};
