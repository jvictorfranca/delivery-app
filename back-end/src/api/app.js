const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

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
  createNewSaleController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
   userLoginController,
  } = require('./controllers/usersController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.post('/products', postProductController);
app.post('/users', newUserController);
app.post('/admim/user', newAdmimUserController);
app.post('/sales', createNewSaleController);
app.post('/login', userLoginController);

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
module.exports = app;