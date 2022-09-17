import React from 'react';

function ProductCard({price, title}) {
  return (
    <div className="w-36   sm:w-60">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-36 h-36 rounded-2xl object-cover   sm:w-60 sm:h-60" />
      <div className="flex justify-between items-center mt-3">
        <div>
          <p className="font-bold text-md mt-0 mb-1">{price}</p>
          <p className="text-sm text-very-light-pink my-0">{title}</p>
        </div>
        <figure className="m-0">
          <img src="../../src/assets/icons/bt_add_to_cart.svg" className="w-9 h-9" />
        </figure>
      </div>
    </div>
  );
}

export { ProductCard };