const { Router } = require('express');
const reviewsController = require('../controllers/reviewsController');

function reviewsRouter() {
  const router = Router();

  router
    .route('/')
    .get(reviewsController.getAllReviews)
    .get(reviewsController.getReviewsByName)
    .post(reviewsController.createReview)
    .delete(reviewsController.deleteReview);

  return router;
}

module.exports = reviewsRouter();
