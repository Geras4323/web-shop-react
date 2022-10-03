import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../routes/Home';
import { CreateAccount } from '../routes/CreateAccount';
import { Login } from '../routes/Login';
import { Showroom } from '../routes/Showroom';
import { ViewAccountData } from '../routes/ViewAccountData';
import { NewPassword } from '../routes/NewPassword';
import { EmailSent } from '../routes/EmailSent';
import { MyOrders } from '../routes/MyOrders';
import { MyOrder } from '../routes/MyOrder';
import { NotFound } from '../routes/NotFound';

import { AppContext } from '../contexts/AppContext';
import { useInitialState } from '../hooks/useInitialState';


function AppUI() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
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