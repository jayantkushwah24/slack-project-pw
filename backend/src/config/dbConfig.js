import mongoose from 'mongoose';
import { DEV_DB_URL, NODE_ENV, PROD_DB_URL } from './configServer.js';

export default async function connectDb() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connection(PROD_DB_URL);
    }
    console.log(`db connected successfully from ${NODE_ENV} environment `);
  } catch (error) {
    console.error('error connectiong to db : ' + error);
  }
}
