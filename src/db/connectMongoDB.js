import mongoose from 'mongoose';
import { Note } from '../models/note.js';

const clientOptions = {
  serverApi: { version: '1', strict: false, deprecationErrors: true },
};

export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL, clientOptions);
    console.log('✅ MongoDB connection established successfully');

    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('✅ Deployment pinged successfully');

    await Note.syncIndexes();
    console.log('✅ Indexes synced successfully');
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
};
