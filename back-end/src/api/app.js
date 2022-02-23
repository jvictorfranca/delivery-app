const bodyParser = require('body-parser');
const express = require('express');
const { 
  getAllProductsController,
   getProductByIdController,
   postProductController,
   } = require('./controllers/productsController');
const { 
  getAllSalesController, getAllSalesByCustomerController, getAllSalesBySellerController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
  } = require('./controllers/usersController');

const app = express();
app.use(bodyParser.json());

app.post('/products', postProductController);

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);
app.get('/users/:id', getUserByIdController);
app.get('/products/:id', getProductByIdController);

app.get('/sales', getAllSalesController);
app.get('/users', getAllUsersController);
app.get('/products', getAllProductsController);

module.exports = app;