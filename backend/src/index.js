import express from 'express';
import { PORT } from './config/configServer.js';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.get('/ping', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'pong'
  });
});

app.listen(PORT, () => {
  console.log('app is listening on the port ' + PORT);
});
