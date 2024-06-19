const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/userRouter');
const tokenRouter = require('./routes/tokenRouter');
const drugRouter = require('./routes/drugRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/drugs', drugRouter);

module.exports = app;
