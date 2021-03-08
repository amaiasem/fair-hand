const { Router } = require('express');
const userController = require('../controllers/userController');

function userRouter() {
  const router = Router();

  router
    .route('/users')
    .get(userController)
    .get(userController)
    .put(userController)
    .post(userController);

  return router;
}

module.exports = userRouter();
