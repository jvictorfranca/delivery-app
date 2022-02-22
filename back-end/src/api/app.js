const express = require('express');
const { 
  getAllSalesController,
 } = require('./controllers/salesController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/sales', getAllSalesController);

module.exports = app;