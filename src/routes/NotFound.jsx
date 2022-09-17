import React from 'react';

function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src="../src/assets/logos/logo_yard_sale.svg" alt="logo" className="w-40 mb-12   md:w-48   lg:w-52" />
      <img src="../src/assets/logos/error404.png" alt="logo" className="w-40 mb-12   md:w-48   lg:w-52" />
      <p className="text-xl mb-4">Oops! Nothing to see here!</p>
      <p className="text-lg text-very-light-pink">Looks like this page does not exist.</p>
    </div>
  );
}

export { NotFound }