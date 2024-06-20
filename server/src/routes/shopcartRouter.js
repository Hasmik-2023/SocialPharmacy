const express = require('express');
const { User, Drug, ShopCart } = require('../../db/models');
const shopcartRouter = require('express').Router();

shopcartRouter.post('/cart', async (req, res) => {
  const { userId, drugId, count } = req.body;
  try {
    const user = await User.findByPk(userId);
    const drug = await Drug.findByPk(drugId);
    if (!user || !drug) {
      return res.status(404).json({ error: 'User or Drug not found' });
    }
    const cartItem = await ShopCart.create({ userId: user.id, drugId: drug.id, count });
    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
