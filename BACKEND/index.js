const express = require('express');
const debug = require('debug')('app');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const userRouter = require('./src/router/userRouter');
const shopRouter = require('./src/router/shopRouter');
const reviewsRouter = require('./src/router/reviewsRouter');
const authRouter = require('./src/router/authRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const DDBB = process.env.DDBB_URL;
const { IP } = process.env;
// const { HOME } = process.env;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./src/passport')(app);

app.use('/user', userRouter);
app.use('/shops', shopRouter);
app.use('/reviews', reviewsRouter);
app.use('/auth', authRouter);

app.listen(port, () => debug(`Server is running in http://${IP}:${port}`));
