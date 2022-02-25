import React from 'react';
import { Redirect } from 'react-router-dom';

function MainPage() {
  return (

    <Redirect to="/user" />
  );
}

export default MainPage;
