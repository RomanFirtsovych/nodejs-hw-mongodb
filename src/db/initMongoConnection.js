import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ Mongo connection successfully established!');
  } catch (error) {
    console.error('❌ Mongo connection error:', error.message);
    process.exit(1);
  }
};

export default initMongoConnection;
