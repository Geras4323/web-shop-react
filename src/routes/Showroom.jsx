import React from 'react';

import { Header } from '../containers/Header';
import { ProductsList } from '../containers/ProductsList';

function Showroom() {
  return (
    <div>
      <Header />
      <ProductsList />
    </div>
  );
}

export { Showroom }