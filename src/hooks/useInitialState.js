import React from 'react';

const initialState = {
  cart: []
}

function useInitialState() {
  const [cart, setCart] = React.useState(initialState);

  function addToCart(product) {
    setCart({
      ...state,
      cart: [...state.cart, product]
    });
  };

  return [cart, addToCart]
}

export { useInitialState };