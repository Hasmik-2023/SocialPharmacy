const express = require('express');
const { User, Drug, ShopCart } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const shopcartRouter = require('express').Router();

shopcartRouter
  .post('/:id', verifyRefreshToken, async (req, res) => {
    const { id } = req.params;
    try {
      const drug = await Drug.findByPk(id);

      if (!drug) {
        return res.status(404).json({ error: 'Лекарство не найдено' });
      }
  
      // Проверить, что на складе есть хотя бы одно лекарство
      if (drug.count < 1) {
        return res.status(400).json({ error: 'Недостаточное количество лекарства на складе' });
      }
  
      // Найти или создать запись в корзине для пользователя и лекарства
      const [cartItem, created] = await ShopCart.findOrCreate({
        where: { userId: res.locals.user.id, drugsId: id },
        defaults: { itemsCount: 1 }
      });
  
      if (!created) {
        // Если запись уже существует, обновить количество
        cartItem.itemsCount += 1;
        await cartItem.save();
      }
  
      // Уменьшить количество лекарства на складе
      drug.count -= 1;
      await drug.save();
  
      res.status(201).json(cartItem);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  })
  // .get('/shopcart/:userId', async (req, res) => {
  //   const { userId } = req.params;
  //   try {
  //     const cartItems = await ShopCart.findAll({ where: { userId }, include: [Drug] });
  //     res.json(cartItems);
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  // });

module.exports = shopcartRouter;
