import React from 'react';

import { ProductCard } from '../components/ProductCard';

function ProductsList() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-autosm gap-6 place-content-center   sm:grid-cols-automd">

        <ProductCard price="$ 120,00" title="Bike"/>
        <ProductCard price="$ 120,00" title="Bike"/>
        <ProductCard price="$ 120,00" title="Bike"/>
        <ProductCard price="$ 120,00" title="Bike"/>
        <ProductCard price="$ 120,00" title="Bike"/>
        <ProductCard price="$ 120,00" title="Bike"/>

      </div>
    </section>
  );
}

export { ProductsList }