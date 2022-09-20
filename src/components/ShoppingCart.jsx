import React from 'react';

import { ShoppingCartItem } from './ShoppingCartItem';

import { AppContext } from '../contexts/AppContext';

function ShoppingCart() {
  const { cart } = React.useContext(AppContext);

  return (
    <aside className="w-full bg-white border border-very-light-pink border-r-0 p-4 rounded-bl-xl   sm:w-80 pb-6 mt-16 pr-4 absolute right-0 top-0">
      <div className="flex flex-row">
        <img src="../../src/assets/icons/flechita.svg" alt="arrow" className="rotate-180 mr-4"/>
        <p className="text-lg font-bold">My order</p>
      </div>

      <div className="mt-4">
        {cart.map(item => (
          <ShoppingCartItem
            product={item}
            key={`orderItem-${item.id}`}
          />
        ))}


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