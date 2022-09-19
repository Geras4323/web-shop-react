import React from 'react';

function ProductCard({price, title, image}) {
  const [onCart, setOnCart] = React.useState([]);

  const handleClick = () => {
    setOnCart([]);
  }

  return (
    <div className="w-36   sm:w-60">
      <img src={image} alt={title} className="w-36 h-36 rounded-2xl object-cover   sm:w-60 sm:h-60" />
      <div className="flex justify-between items-center mt-3">
        <div>
          <p className="font-bold text-md mt-0 mb-1">{price}</p>
          <p className="text-sm text-very-light-pink my-0">{title}</p>
        </div>
        <figure
          onClick={handleClick}
          className="m-0   hover:cursor-pointer">
          <img src="../../src/assets/icons/bt_add_to_cart.svg" className="w-9 h-9" />
        </figure>
      </div>
    </div>
  );
}

export { ProductCard };