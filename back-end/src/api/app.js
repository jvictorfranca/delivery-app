const bodyParser = require('body-parser');
const express = require('express');

const newUserController = require('./controllers/registerUserController');
const newAdmimUserController = require('./controllers/admimUserController');

const { 
  getAllProductsController,
   getProductByIdController,
   postProductController,
   } = require('./controllers/productsController');
const { 
  getAllSalesController,
  getAllSalesByCustomerController,
  getAllSalesBySellerController,
  updateSaleStatusByIdController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
   userLoginController,
  } = require('./controllers/usersController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(bodyParser.json());

app.post('/products', postProductController);
app.post('/users', newUserController);
app.post('/admim/user', newAdmimUserController);

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);
app.get('/users/:id', getUserByIdController);
app.get('/products/:id', getProductByIdController);

app.get('/sales', getAllSalesController);
app.get('/users', getAllUsersController);
app.get('/products', getAllProductsController);

app.put('/sales/:id', updateSaleStatusByIdController);

app.use(errorMiddleware);

app.post('/login', userLoginController);

module.exports = app;