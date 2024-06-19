const express = require('express');
const { Drug, User } = require('../../db/models');
const drugRouter = express.Router();

drugRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
      });
      res.json(posts);
    } catch (err) {
      res.status(500).send('Internal server error');
    }
});


module.exports = drugRouter;