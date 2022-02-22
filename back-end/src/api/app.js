const express = require('express');
const { 
  getAllSalesController,
 } = require('./controllers/salesController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/customer/:id', getAllSalesByCustomer);
app.get('/seller/id', getAllSalesBySeller);

app.get('/sales', getAllSalesController);

module.exports = app;