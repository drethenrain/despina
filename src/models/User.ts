import { Schema, model, Document } from 'mongoose';

const schema = new Schema<Document>(
  {
    _id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model('User', schema);

export default User;
