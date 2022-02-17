require('dotenv').config();

const {
  PORT = 3000,
  JWT_SECRET = 'dev-secret-value',
  NODE_ENV = 'development',
} = process.env;
module.exports = {
  PORT,
  JWT_SECRET,
  NODE_ENV,
};
