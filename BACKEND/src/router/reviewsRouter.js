const { Router } = require('express');
const reviewsController = require('../controllers/reviewsController');

function reviewsRouter() {
  const router = Router();

  router
    .route('/')
    .get(reviewsController.getAllReviews)
    .post(reviewsController.createReview)
    .delete(reviewsController.deleteReview);

  router
    .route('/shopName/:shopName')
    .get(reviewsController.getReviewsByShopName);

  router
    .route('/userName/:userName')
    .get(reviewsController.getReviewsByUserName);

  return router;
}

module.exports = reviewsRouter();
