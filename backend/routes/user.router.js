const { Router } = require('express');

const {
  getUserByIdValidator,
  updateAvatarValidator,
  updateProfileValidator,
} = require('../middlewares/validators/userRequestValidate');

const router = new Router();

const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getMyProfile,
} = require('../controllers/UserController');

router.get('/me', getMyProfile);
router.get('/', getUsers);
router.get('/:id', getUserByIdValidator, getUserById);
router.patch('/me', updateProfileValidator, updateUser);
router.patch('/me/avatar', updateAvatarValidator, updateAvatar);

module.exports = router;
