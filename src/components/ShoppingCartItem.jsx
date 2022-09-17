import React from 'react';

function ShoppingCartItem({price, title}) {
  return (
    <div className="w-full flex flex-row mb-6 items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" className="w-16 h-16 rounded-2xl object-cover" />
        </figure>
        <p className="text-very-light-pink">{title}</p>
      </div>
      <div className="flex flex-row items-center gap-4 font-bold">
        <p>{price}</p>
        <img src="../../src/assets/icons/icon_close.png" alt="arrow" />
      </div>
    </div>
  );
}

export { ShoppingCartItem };