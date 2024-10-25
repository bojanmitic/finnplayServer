import { config } from 'dotenv';

export const PORT = process.env.PORT ?? 8002;
export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
