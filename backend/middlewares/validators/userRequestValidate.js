const { Joi, celebrate } = require('celebrate');

const regexpUrl = /https?:\/\/(www.)?([\w\-]+\.{0,1}){1,32}\.[a-z]{2,}(?=\/)[\w\-\._~:\/\?#\[\]@!$&\'()\*+,;=]+#?$/; // eslint-disable-line
// ссылка пройдет валидацию, если после домена и доменной зоны будет указан путь,
// так как мы хотим добавлять именно путь до удаленного ресурса, а не просто домен сервера на котором ресурс находится
const createUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().min(11).pattern(regexpUrl),
  }),
});
const loginUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4),
  }),
});
const getUserByIdValidator = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().hex().min(24),
  }),
});
const updateAvatarValidator = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().min(11).pattern(regexpUrl).required(),
  }),
});
const updateProfileValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

module.exports = {
  createUserValidator,
  loginUserValidator,
  getUserByIdValidator,
  updateAvatarValidator,
  updateProfileValidator,
};
