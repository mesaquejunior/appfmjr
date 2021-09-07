import express, { Request, Response } from 'express';
import cors from 'cors';

const allowedOrigins = ['*']

const options: cors.CorsOptions = {
  origin: allowedOrigins
}

const app = express();

app.use(cors(options));

app.use(express.json());

app.get('/hello', (req:Request, res:Response) => {
  const { name } = req.query
  res.json({'message': `Hello, ${name}`});
});

export default app;