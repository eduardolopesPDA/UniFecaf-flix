import express from 'express';
import { apiRouter } from './routes';

export const app = express();

app.use(express.json());

app.use('/v1/controle-filmes', apiRouter);
