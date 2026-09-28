import express from 'express';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/error_middleware/error-handler.js';
import { notFoundHandler } from './middleware/error_middleware/application-errors.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api', apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);


export default app;

