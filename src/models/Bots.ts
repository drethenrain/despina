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
    prefix: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    servers: {
      type: Number,
    },
    votes: {
      type: Number,
      default: 0,
    },
    invite: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Bot = model('Bot', schema);

export default Bot;
