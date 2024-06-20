const express = require('express');
const { User } = require('../../db/models');
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});


module.exports = userRouter;