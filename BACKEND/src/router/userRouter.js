const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter() {
  const router = Router();

  router
    .route('/')
    .post(userController.createUser)
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

  return router;
}

module.exports = userRouter();
