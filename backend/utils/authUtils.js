const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const getToken = (payload) => {
  if (!payload) {
    throw new Error('Пустое тело токена');
  }
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

module.exports = {
  getToken,
};
