const express = require('express');
const { 
  getAllSalesController, getAllSalesByCustomerController, getAllSalesBySellerController,
 } = require('./controllers/salesController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);

app.get('/sales', getAllSalesController);

module.exports = app;