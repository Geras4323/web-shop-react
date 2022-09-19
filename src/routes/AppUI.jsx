import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { CreateAccount } from './CreateAccount';
import { Login } from './Login';
import { Showroom } from './Showroom';
import { ViewAccountData } from './ViewAccountData';
import { NewPassword } from './NewPassword';
import { EmailSent } from './EmailSent';
import { MyOrders } from './MyOrders';
import { MyOrder } from './MyOrder';
import { NotFound } from './NotFound';

import { AppContext } from '../contexts/AppContext';
import { useInitialState } from '../hooks/useInitialState';


function AppUI() {
  return (
    <AppContext.Provider value={useInitialState}>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/create-account" element={ <CreateAccount />} />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/showroom" element={ <Showroom /> } />
          <Route exact path="/account-data" element={ <ViewAccountData />} />
          <Route exact path="/new-password" element={ <NewPassword /> } />
          <Route exact path="/email-sent" element={ <EmailSent /> } />
          <Route exact path="/my-orders" element={ <MyOrders /> } />
          <Route exact path="/my-order" element={ <MyOrder /> } />
          <Route path="*" element={ <NotFound /> } />

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export { AppUI };