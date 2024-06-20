const express = require('express');
const { User, Drug, ShopCart } = require('../../db/models');
const shopcartRouter = require('express').Router();

shopcartRouter
 .post('/shopcart', async (req, res) => {
  const { userId, drugId, count } = req.body;
  try {
    const user = await User.findByPk(userId);
    const drug = await Drug.findByPk(drugId);
    if (!user || !drug) {
      return res.status(404).json({ error: 'Пользователь или лекарство не найдены' });
    }
    if (drug.count < count) {
      return res.status(400).json({ error: 'Данного лекарства недостаточно' });
    }

    let cartItem = await ShopCart.findOne({ where: { userId: user.id, drugId: drug.id } });
    if (cartItem) {
      cartItem.count += count;
      await cartItem.save();
    } else {
      cartItem = await ShopCart.create({ userId: user.id, drugId: drug.id, count });
    }

    drug.count -= count;
    await drug.save();

    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
 })
 .get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const cartItems = await ShopCart.findAll({ where: { userId }, include: [Drug] });
      res.json(cartItems);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
