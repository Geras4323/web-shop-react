import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount';
import { ViewAccountData } from './ViewAccountData';
import { NewPassword } from './NewPassword';
import { EmailSent } from './EmailSent';
import { MyOrders } from './MyOrders';
import { MyOrder } from './MyOrder';
import { NotFound } from './NotFound';

import { ProductsList } from '../containers/ProductsList';
import { ShoppingCart } from '../components/ShoppingCart';

function AppUI() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/create-account" element={ <CreateAccount />} />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/products" element={ <ProductsList /> } />
        <Route exact path="/account-data" element={ <ViewAccountData />} />
        <Route exact path="/new-password" element={ <NewPassword /> } />
        <Route exact path="/email-sent" element={ <EmailSent /> } />
        <Route exact path="/my-orders" element={ <MyOrders /> } />
        <Route exact path="/my-order" element={ <MyOrder /> } />
        <Route path="*" element={ <NotFound /> } />

      </Routes>
    </BrowserRouter>
  );
}

export { AppUI };