const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { PORT } = require('./config');
const authMiddleware = require('./middlewares/auth.middleware');
const corsMiddleware = require('./middlewares/cors.middleware');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const vendorErrorsHandler = require('./middlewares/vendorErrorsHandler');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');
const cardRouter = require('./routes/card.router');

const NotFoundError = require('./errors/NotFoundError');

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use(corsMiddleware);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сейчас сервер упадет');
  }, 0);
});

app.use('/', authRouter);
app.use('/users', authMiddleware, userRouter);
app.use('/cards', authMiddleware, cardRouter);
app.use(authMiddleware, (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

app.use(errorLogger);
app.use(errors());

app.use(vendorErrorsHandler, (error, req, res, next) => { // eslint-disable-line no-unused-vars
  if (error.sendError) {
    return error.sendError(res);
  }
  return res.status(500).json({ message: 'Ошибка на сервере' });
});

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mestodb');
    app.listen(PORT, () => console.log('Server start'));
  } catch (error) {
    console.log(error);
  }
};

start();
