import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { NewPassword } from './NewPassword';
import { EmailSent } from './EmailSent';
import { NotFound } from './NotFound';

function AppUI() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/new-password" element={ <NewPassword /> } />
        <Route exact path="/email-sent" element={ <EmailSent /> } />
        <Route path="*" element={ <NotFound /> } />

      </Routes>
    </BrowserRouter>
  );
}

export { AppUI };