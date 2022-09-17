import React from 'react';

import { MyOrdersItem } from '../components/MyOrdersItem';


function MyOrders() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid w-80">
        <h1 className="text-lg mb-10 font-bold">My orders</h1>

        <div className="flex flex-col gap-4">

          <MyOrdersItem />
          <MyOrdersItem />
          <MyOrdersItem />
          <MyOrdersItem />

        </div>
      </div>
    </div>
  );
}

export { MyOrders }