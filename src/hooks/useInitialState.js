import React from 'react';

function useInitialState() {
  const [cart, setCart] = React.useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return {cart, addToCart};
}

export { useInitialState };



/*
const initialState = {
  cart: []
}

function useInitialState() {
  const [state, setState] = React.useState(initialState);

  function addToCart(product) {
    setState({
      ...state,
      cart: [...state.cart, product]
    });
  };

  return {state, addToCart}
}
*/