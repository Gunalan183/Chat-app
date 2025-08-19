import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    }
    catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    };
};
