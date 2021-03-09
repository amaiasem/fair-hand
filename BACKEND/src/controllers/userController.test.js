/* eslint-disable no-underscore-dangle */
const {
  getUser,
  updateUser,
  deleteUser,
  createUser
} = require('./userController');

const User = require('../models/userModel');

jest.mock('../models/userModel.js');

describe('Given a function createUser', () => {
  let req;
  let res;

  beforeEach(() => {
    req = { body: {} };
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', () => {
    const newUser = new User(req.body);
    newUser.save.mockImplementationOnce((callback) => { callback(false); });

    createUser(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', () => {
    const newUser = new User(req.body);
    newUser.save.mockImplementationOnce((callback) => { callback(true); });

    createUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function getUser', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: { _id: 2 } };
    User.findById.mockReturnValueOnce({ exec: jest.fn() });

    await getUser(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: { _id: null } };
    User.findById.mockReturnValueOnce(() => { throw new Error('Not found'); });

    await getUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function deleteUser', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: { _id: 2 } };

    User.findByIdAndDelete.mockReturnValueOnce({ exec: jest.fn() });
    await deleteUser(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: { _id: null } };

    User.findByIdAndDelete.mockReturnValueOnce(() => { throw new Error('Could not delete the user'); });
    await deleteUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('Given a function updateUser', () => {
  let req;
  let res;

  beforeEach(() => {
    res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };
  });

  test('Then should call res.json', async () => {
    req = { body: { _id: 2, name: 'John' } };

    User.findByIdAndUpdate.mockReturnValueOnce({ exec: jest.fn() });
    await updateUser(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  test('Then should call res.send', async () => {
    req = { body: { _id: 2, name: 'John' } };

    User.findByIdAndUpdate.mockReturnValueOnce(() => { throw new Error('Could not update'); });
    await updateUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
