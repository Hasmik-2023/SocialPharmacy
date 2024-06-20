const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookie.config');

const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({ message: 'Fill all fields' });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, password: hashpass },
    });
    if (!created) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = newUser.get();
    delete user.hashpass;
    const { accessToken, refreshToken } = generateTokens({ user });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig)
      .status(200)
      .json({ accessToken, user });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

authRouter.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Fill all fields' });
    }
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!foundUser) {
      return res.status(400).json({ message: 'User not found' });
    }
    const isValid = await bcrypt.compare(password, foundUser.password);
    if (!isValid) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const user = foundUser.get();
    delete user.password;
    const { accessToken, refreshToken } = generateTokens({ user });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig)
      .status(200)
      .json({ accessToken, user });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

authRouter.post('/logout', async (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRouter;
