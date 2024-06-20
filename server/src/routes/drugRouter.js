const express = require('express');
const { Drug } = require('../../db/models');
const drugRouter = express.Router();

drugRouter.get('/drugs', async (req, res) => {
  const drugs = await Drug.findAll();
  res.json(drugs);
});

module.exports = drugRouter;
