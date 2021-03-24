const {
  getAllReviews,
  createReview,
  deleteReview,
  getReviewsByShopName,
  getReviewsByUserName
} = require('./reviewsController');

const Review = require('../models/reviewsModel');

jest.mock('../models/reviewsModel.js');

describe('Given a function createReview', () => {
  let req;
  let res;

  beforeEach(() => {
    req = { body: {} };
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', () => {
    const newReview = new Review(req.body);

    newReview.save.mockImplementationOnce((callback) => { callback(false); });
    createReview(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', () => {
    const newReview = new Review(req.body);

    newReview.save.mockImplementationOnce((callback) => { callback(true); });
    createReview(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function getAllReviews', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: {} };
    Review.find.mockReturnValueOnce({ exec: jest.fn() });

    await getAllReviews(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: null };
    Review.find.mockReturnValueOnce(() => { throw new Error('Could not find the reviews'); });

    await getAllReviews(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function getReviewsByShopName', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { params: { shopName: 'Brava' } };
    Review.find.mockReturnValueOnce({ exec: jest.fn() });

    await getReviewsByShopName(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { params: { shopName: null } };
    Review.find.mockImplementationOnce(() => { throw new Error('Could not get shop reviews'); });

    await getReviewsByShopName(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function getReviewsByUserName', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { params: { userName: 'Amaia' } };
    Review.find.mockReturnValueOnce({ exec: jest.fn() });

    await getReviewsByUserName(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { params: { userName: null } };
    Review.find.mockImplementationOnce(() => { throw new Error('Could not get shop reviews'); });

    await getReviewsByUserName(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function deleteReview', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: { _id: 2 } };

    Review.findByIdAndDelete.mockReturnValueOnce({ exec: jest.fn() });
    await deleteReview(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: { _id: null } };

    Review.findByIdAndDelete.mockReturnValueOnce(() => { throw new Error('Could not delete the review'); });
    await deleteReview(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
