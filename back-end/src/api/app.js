const express = require('express');
const { 
  getAllSalesController, getAllSalesByCustomerController, getAllSalesBySellerController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
  } = require('./controllers/usersController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);
app.get('/users/:id', getUserByIdController);

app.get('/sales', getAllSalesController);
app.get('/users', getAllUsersController);

module.exports = app;