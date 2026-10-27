import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/', (req: Request, res: Response) => {
  res.send('Lumina E-Commerce API is running...');
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running smoothly on port ${PORT}`);
});