const { getAllShops, getOneShop, createShop } = require('./shopsController');
const Shop = require('../models/shopModel');

jest.mock('../models/shopModel.js');

describe('Given a function getAllShops', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.send', () => {
    Shop.find.mockImplementationOnce((query, callback) => { callback(true); });

    getAllShops(req, res);
    expect(res.send).toHaveBeenCalled();
  });

  test('Then should call res.json', () => {
    Shop.find.mockImplementationOnce((query, callback) => { callback(false, [1, 2, 3]); });

    getAllShops(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('Given a function getOneShop', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: { _id: 2 } };

    Shop.findById.mockReturnValueOnce({ exec: jest.fn() });

    await getOneShop(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: { _id: null } };

    Shop.findById.mockReturnValueOnce(() => { throw new Error('Could not get the shop'); });

    await getOneShop(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function createShop', () => {
  let req;
  let res;

  beforeEach(() => {
    req = { body: {} };
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', () => {
    const newShop = new Shop(req.body);

    newShop.save.mockImplementationOnce((callback) => { callback(false); });
    createShop(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', () => {
    const newShop = new Shop(req.body);

    newShop.save.mockImplementationOnce((callback) => { callback(true); });
    createShop(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
