const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const validateJWT = require('./middlewares/validateJWT');

const newUserController = require('./controllers/registerUserController');
const newAdmimUserController = require('./controllers/admimUserController');

const { 
  getAllProductsController,
   getProductByIdController,
   postProductController,
   uploadImageController,
   } = require('./controllers/productsController');
const { 
  getAllSalesController,
  getAllSalesByCustomerController,
  getAllSalesBySellerController,
  updateSaleStatusByIdController,
  createNewSaleController,
  getSaleByIdController,
 } = require('./controllers/salesController');

const {
   getAllUsersController,
   getUserByIdController,
   userLoginController,
   getUserSellersController,
   deleteUserController,
  } = require('./controllers/usersController');
const errorMiddleware = require('./middlewares/errorMiddleware');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'images/');
  },
  filename: (req, _file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer(storage);

const app = express();

app.use(express.static(__dirname));

app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.post('/products', postProductController);
app.post('/users', newUserController);
app.post('/admin/user', validateJWT, newAdmimUserController);
app.post('/sales', createNewSaleController);
app.post('/login', userLoginController);

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/sales/customer/:id', getAllSalesByCustomerController);
app.get('/sales/seller/:id', getAllSalesBySellerController);
app.get('/sales/sale/:id', getSaleByIdController);
app.get('/users/sellers', getUserSellersController);
app.get('/users/:id', getUserByIdController);
app.get('/products/:id', getProductByIdController);

app.get('/sales', getAllSalesController);
app.get('/users', getAllUsersController);
app.get('/products', getAllProductsController);

app.put('/sales/:id', updateSaleStatusByIdController);
app.put('/products/:id/image/', upload.single('image'), uploadImageController);

app.delete('/users', deleteUserController);

app.use(errorMiddleware);
module.exports = app;