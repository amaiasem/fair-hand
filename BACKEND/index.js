const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
const userRouter = require('./src/router/userRouter');
const shopRouter = require('./src/router/shopRouter');
const reviewsRouter = require('./src/router/reviewsRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const DDBB = process.env.DDBB_URL;
// const { IP } = process.env;
const { HOME } = process.env;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter);
app.use('/shops', shopRouter);
app.use('/reviews', reviewsRouter);

app.listen(port, () => debug(`Server is running in http://${HOME}:${port}`));
