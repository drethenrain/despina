import 'dotenv/config';

const { MONGO_URI, CLIENT_ID, CLIENT_SECRET, CLIENT_REDIRECT } = process.env;

const PORT = process.env.PORT || 3000;

export { PORT, MONGO_URI, CLIENT_ID, CLIENT_SECRET, CLIENT_REDIRECT };
