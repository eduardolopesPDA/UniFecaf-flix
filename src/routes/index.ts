import { Router } from 'express';
import { filmeRouter } from './filme.routes';

export const apiRouter = Router();

apiRouter.use(filmeRouter);

// Novos recursos: importar o router e montar aqui
