/* eslint-disable no-underscore-dangle */
const Review = require('../models/reviewsModel');

function createReview(req, res) {
  const newReview = new Review(req.body);

  newReview.save((error) => {
    if (error) {
      res.status(500);
      res.send('Could not create a review');
    } else {
      res.json(newReview);
    }
  });
}

async function getAllReviews(req, res) {
  const query = {};

  try {
    const shopReviews = await Review.find(query).exec();
    res.json(shopReviews);
  } catch (error) {
    res.status(500);
    res.send('Could not get shop reviews');
  }
}

async function getReviewsByShopName(req, res) {
  const query = { shopName: req.params.shopName };
  const shopReviews = await Review.find(query).exec();

  try {
    res.json(shopReviews);
  } catch (error) {
    res.status(500);
    res.send('Could not get shop reviews');
  }
}

async function getReviewsByUserName(req, res) {
  const query = { userName: req.params.userName };
  const shopReviews = await Review.find(query).exec();

  try {
    res.json(shopReviews);
  } catch (error) {
    res.status(500);
    res.send('Could not get shop reviews');
  }
}

async function deleteReview(req, res) {
  const id = req.body._id;

  try {
    const deletedReview = await Review.findByIdAndDelete(id).exec();
    res.json(deletedReview);
  } catch (error) {
    res.status(500);
    res.send('Could not delete your review');
  }
}

module.exports = {
  getReviewsByShopName,
  getReviewsByUserName,
  createReview,
  deleteReview,
  getAllReviews
};
