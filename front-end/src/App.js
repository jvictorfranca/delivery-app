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
        <Route exact component={ Pages.User } path="/user" />
        <Route exact component={ Pages.Seller } path="/seller" />
        <Route exact component={ Pages.Admin } path="/admin" />
        <Route exact component={ Pages.Sales } path="/sales" />
      </Switch>
    </Provider>

  );
}

export default App;
