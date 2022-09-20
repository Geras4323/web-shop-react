import React from 'react';

function ShoppingCartItem({product}) {
  return (
    <div className="w-full flex flex-row mb-6 items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <figure>
          <img src={product.images[0]} alt="bike" className="w-16 h-16 rounded-2xl object-cover" />
        </figure>
        <p className="sm:max-w-min text-very-light-pink">{product.title}</p>
      </div>
      <div className="flex flex-row items-center gap-4 font-bold">
        <p className="w-auto">{`$ ${product.price}`}</p>
        <img src="../../src/assets/icons/icon_close.png" alt="arrow" />
      </div>
    </div>
  );
}

export { ShoppingCartItem };