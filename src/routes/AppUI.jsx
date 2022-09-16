import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Home } from './Home';
import { Login } from './Login';
import { EmailSent } from './EmailSent';
// import { NotFound } from './NotFound';

function AppUI() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route exact path="/" element={ <Home /> } /> */}
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/email-sent" element={ <EmailSent /> } />
        {/* <Route element={ <NotFound /> } /> */}

      </Routes>
    </BrowserRouter>
  );
}

export { AppUI };