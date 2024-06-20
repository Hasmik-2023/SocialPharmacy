const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth.router');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
const tokenRouter = require('./routes/tokenRouter');
const drugRouter = require('./routes/drugRouter');
const shopcartRouter = require('./routes/shopcartRouter')

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/drugs', drugRouter);
app.use('/api/shopcart', shopcartRouter);

module.exports = app;
