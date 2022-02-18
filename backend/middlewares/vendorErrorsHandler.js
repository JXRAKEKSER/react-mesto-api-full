const ValidationError = require('../errors/ValidationError');

module.exports = (e, req, res, next) => {
  if (e.statusCode === 400) {
    next(new ValidationError(e.message));
  }
  if (e.name === 'CastError') {
    next(new ValidationError('Неправильно передан id'));
  }
  if (e.name === 'ValidationError') {
    next(new ValidationError(e.message));
  }
  next(e);
};
