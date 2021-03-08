const { Router } = require('express');
const shopsController = require('../controllers/shopsController');

function shopRouter() {
  const router = Router();

  router
    .route('/')
    .get(shopsController.getAllShops)
    .get(shopsController.getOneShop)
    .post(shopsController.createShop);

  return router;
}

module.exports = shopRouter();
