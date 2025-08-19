import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.route.js';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes);


app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
    connectDB();
});

