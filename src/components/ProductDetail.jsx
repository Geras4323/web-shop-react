import React from 'react';

function ProductDetail() {
  return (
    <aside className="w-80 pb-6 absolute right-0">
      <div className="bg-white w-10 h-10 absolute top-6 left-6 z-20 p-3 rounded-full   hover:cursor-pointer">
        <img src="../../src/assets/icons/icon_close.png" alt="close" />
      </div>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" className="w-full h-80 object-cover rounded-b-2xl"/>
      <div className="mt-6 mx-6">
        <p className="text-md mb-1 font-bold">$30,00</p>
        <p className="text-md mb-9 text-very-light-pink">Bike</p>
        <p className="text-sm mb-9 text-very-light-pink">With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="bg-hospital-green border-none rounded-lg text-white w-full cursor-pointer text-md font-bold h-12 flex justify-center items-center">
          <img src="../../src/assets/icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
  );
}

export { ProductDetail }