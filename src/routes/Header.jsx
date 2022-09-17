import React from 'react';

function Header() {
  return (
    <nav className="flex justify-between px-6 border-b border-b-very-light-pink">
      <img src="../../src/assets/icons/icon_menu.svg" alt="menu" className="sm:hidden" />

      <div className="flex">
        <img src="../../src/assets/logos/logo_yard_sale.svg" alt="logo" className="w-24" />
        <ul className="p-0 m-0 hidden   sm:flex items-center h-16 ml-3 text-very-light-pink">
          <li>
            <a href="/" className="Header_Item">All</a>
          </li>
          <li>
            <a href="/" className="Header_Item">Clothes</a>
          </li>
          <li>
            <a href="/" className="Header_Item">Electronics</a>
          </li>
          <li>
            <a href="/" className="Header_Item">Furniture</a>
          </li>
          <li>
            <a href="/" className="Header_Item">Toys</a>
          </li>
          <li>
            <a href="/" className="Header_Item">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="p-0 m-0 flex items-center h-16">
          <li className="text-very-light-pink text-sm mr-3 hidden   sm:block">platzi@example.com</li>
          <li className="relative">
            <img src="../../src/assets/icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div className="w-4 h-4 bg-hospital-green rounded-full text-sm font-bold absolute -top-1 -right-1 flex justify-center items-center">2</div>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export { Header };