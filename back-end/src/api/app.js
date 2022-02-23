const express = require('express');
const BodyParse = require('body-parser');
const newUserController = require('./controllers/registerUserController');
const newAdmimUserController = require('./controllers/admimUserController');
const { 
  getAllSalesController, getAllSalesByCustomerController, getAllSalesBySellerController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
  } = require('./controllers/usersController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(BodyParse.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);
app.get('/users/:id', getUserByIdController);

app.get('/sales', getAllSalesController);
app.get('/users', getAllUsersController);

app.post('/users', newUserController);
app.post('/admim/user', newAdmimUserController);

app.use(errorMiddleware);

module.exports = app;