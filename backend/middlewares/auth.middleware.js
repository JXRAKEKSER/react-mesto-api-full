const jwt = require('jsonwebtoken');
const UnAuthorizedError = require('../errors/UnAuthorizedError');
const { JWT_SECRET } = require('../config');
module.exports = (req, res, next) => {
  if (req.method !== 'OPTIONS') {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new UnAuthorizedError('Пользователь не авторизован');
      }
      req.user = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.log(error);
      next(new UnAuthorizedError('Пользователь не авторизован'));
    }
  }
  next();
};
