import React from 'react';

import { AppContext } from '../contexts/AppContext';

function ProductCard({ product }) {
  const { cart, addToCart } = React.useContext(AppContext);
  const [isAdded, setIsAdded] = React.useState(false)

  const handleClick = (item) => {
    addToCart(item);
    setIsAdded(true)
  }

  React.useEffect(() => {
    setIsAdded(cart.some((item) => item === product))
  })

  return (
    <div className="w-36   sm:w-60">
      <img src={product.images[0]} alt={product.title} className="w-36 h-36 rounded-2xl object-cover   sm:w-60 sm:h-60   hover:cursor-pointer" />
      <div className="flex justify-between items-start mt-3   sm:items-center">
        <div>
          <p className="font-bold text-md mt-0 mb-1">{`$ ${product.price}`}</p>
          <p className="text-sm text-very-light-pink my-0 w-24   sm:w-full">{product.title}</p>
        </div>
        {!isAdded
          ? <figure
              onClick={() => handleClick(product)}
              className="m-0   hover:cursor-pointer">
              <img src="../../src/assets/icons/bt_add_to_cart.svg" />
            </figure>
          : <figure
              className="m-0 rounded-full border-b border-b-very-light-pink">
              <img src="../../src/assets/icons/bt_added_to_cart.svg" />
            </figure>
        }
        {/* <figure
          onClick={() => handleClick(product)}
          className="m-0   hover:cursor-pointer">
          <img
            src={!isAdded ? "../../src/assets/icons/bt_add_to_cart.svg" : "../../src/assets/icons/bt_added_to_cart.svg"}
            className="w-9 h-9"
          />
        </figure> */}
      </div>
    </div>
  );
}

export { ProductCard };