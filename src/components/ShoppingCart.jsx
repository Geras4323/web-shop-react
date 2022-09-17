import React from 'react';

import { ShoppingCartItem } from './ShoppingCartItem';

function ShoppingCart() {
  return (
    <aside className="w-screen   sm:w-80 pb-6 mt-8 pr-4 absolute right-0">
      <div className="flex flex-row">
        <img src="../../src/assets/icons/flechita.svg" alt="arrow" className="rotate-180 mr-4"/>
        <p className="text-lg font-bold">My order</p>
      </div>

      <div className="mt-4">
        <ShoppingCartItem price="$120,00" title="Bike"/>
        <ShoppingCartItem price="$120,00" title="Bike"/>
        <ShoppingCartItem price="$120,00" title="Bike"/>

        <div className="text-md flex flex-row justify-between items-center rounded-lg font-bold px-5 h-12 bg-text-input-field mb-6">
          <p>
            <span>Total</span>
          </p>
          <p>$90.00</p>
        </div>

        <button className="bg-hospital-green border-none rounded-lg text-white w-full cursor-pointer text-md font-bold h-12">
          Checkout
        </button>
      </div>
    </aside>

  );
}

export { ShoppingCart }