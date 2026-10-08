import express, { Request, Response } from 'express';
import path from 'path';
import pino from 'pino';
import cookieParser from 'cookie-parser';

const logger = pino();
const app = express();

app.use(express.json());
app.use(cookieParser());

const publicDir = path.join(process.cwd(), 'public');

app.use(express.static(publicDir));

app.get(/^(?!\/api\/).*/, (req: Request, res: Response) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta ${PORT}`);
});