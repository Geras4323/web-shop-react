import React from 'react';

import { MyOrderItem } from '../components/MyOrderItem';

function MyOrder() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid w-80">
        <h1 className="text-lg mb-10 font-bold">My order</h1>

        <div className="flex flex-col">
          <div className="flex flex-row justify-between h-16 items-center bg-text-input-field mb-6 rounded-lg px-6">
            <p className="flex flex-col">
              <span className="text-md font-bold">03.25.21</span>
              <span className="text-sm text-very-light-pink">3 articles</span>
            </p>
            <p className="text-end font-bold">$360.00</p>
          </div>

          <MyOrderItem price="$120,00" title="Bike"/>
          <MyOrderItem price="$120,00" title="Bike"/>
          <MyOrderItem price="$120,00" title="Bike"/>

        </div>
      </div>
    </div>
  );
}

export { MyOrder }