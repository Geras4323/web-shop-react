import React from 'react';

function Login() {
  return (
    <div className="w-screen h-screen grid justify-center items-center">
      <div className="w-80 flex flex-col items-center">
        <img src="../../src/assets/logos/logo_yard_sale.svg" alt="logo" className="w-32 mb-12   sm:hidden" />

        <form action="/" className="flex flex-col w-full">
          <label htmlFor="email" className="text-sm font-bold mb-1">Email address</label>
          <input type="text" id="email" placeholder="platzi@example.com" className="bg-text-input-field border-none rounded-lg h-10 text-md p-2 mb-6" />

          <label htmlFor="password" className="text-sm font-bold mb-1">Password</label>
          <input type="password" id="password" placeholder="*********" className="bg-text-input-field border-none rounded-lg h-10 text-md p-2 mb-3" />

          <input type="submit" value="Log in" className="bg-hospital-green border-none rounded-lg text-white w-full cursor-pointer text-md font-bold h-12 mt-4 mb-8" />
          <a href="/" className="text-hospital-green text-sm text-center mb-10">Forgot my password</a>
        </form>

        <button className="bg-white border border-hospital-green rounded-lg text-hospital-green w-full cursor-pointer text-md font-bold h-12 mt-4 mb-8">Sign up</button>
      </div>
    </div>

  );
}

export { Login }