const {
  register,
  login
} = require('./authController');
const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a authControllers function', () => {
  let req;
  let res;
  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });
  describe('When calling register function', () => {
    test('Then it will call res.send if exec returns true', async () => {
      req = {
        body: {
          email: 'amaia@gmail.com',
          password: 'a11111',
          userName: 'amaia'
        }
      };
      const exec = jest.fn().mockReturnValueOnce(true);
      User.findOne.mockReturnValueOnce({ exec });
      await register(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('Then it will call res.json from login', async () => {
      req = {
        body: {
          email: 'amaia@gmail.com',
          password: 'a11111',
          userName: 'amaia'
        },
        login: jest.fn()
      };
      User.findOne.mockReturnValueOnce({ exec: jest.fn() });
      await register(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then it will call res.status from req.login', async () => {
      req = {
        body: {
          email: 'amaia@gmail.com',
          password: 'a11111',
          userName: 'amaia'
        },
        login: (callback) => callback()
      };
      User.findOne.mockReturnValueOnce({ exec: jest.fn() });
      await register(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When calling login function', () => {
    test('Then it will call res.json', async () => {
      req = {
        body: {
          email: 'amaia@gmail.com'
        }
      };
      User.findOne.mockReturnValueOnce({ exec: jest.fn() });
      await login(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
