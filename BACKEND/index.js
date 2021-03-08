const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const DDBB = process.env.DDBB_URL;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/');

app.listen(port, () => debug(`Server is running in port ${chalk.red(port)}`));
