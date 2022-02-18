const Router = require('express');
const { createUser, login } = require('../controllers/UserController');
const { createUserValidator, loginUserValidator } = require('../middlewares/validators/userRequestValidate');

const router = new Router();
router.post('/signup', createUserValidator, createUser);
router.post('/signin', loginUserValidator, login);

module.exports = router;
