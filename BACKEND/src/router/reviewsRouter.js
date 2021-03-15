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
    .get(reviewsController.getReviewsByName);

  router
    .route('/userName/:userName')
    .get(reviewsController.getReviewsByName);

  return router;
}

module.exports = reviewsRouter();
