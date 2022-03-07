import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import Pages from './Pages';

function App() {
  return (

    <Provider>
      <Switch>
        <Route exact component={ Pages.MainPage } path="/" />
        <Route exact component={ Pages.Login } path="/login" />
        <Route exact component={ Pages.Register } path="/register" />
        <Route exact component={ Pages.UserProducts } path="/customer/products" />
        <Route exact component={ Pages.Seller } path="/seller" />
        <Route exact component={ Pages.Admin } path="/admin/manage" />
        <Route exact component={ Pages.Sales } path="/sales" />
        <Route exact component={ Pages.Checkout } path="/customer/checkout" />
        <Route exact component={ Pages.SpecificSale } path="/customer/orders/:id" />
        <Route exact component={ Pages.CustomerSales } path="/customer/orders" />
        <Route exact component={ Pages.SellerSales } path="/seller/orders" />
        <Route exact component={ Pages.SpecificSellerSale } path="/seller/orders/:id" />
        <Route
          exact
          component={
            Pages.SpecificSellerSales
          }
          path="/customer/orders/:id"
        />

      </Switch>
    </Provider>

  );
}

export default App;
