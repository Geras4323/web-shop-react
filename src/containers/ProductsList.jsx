import axios from 'axios';
import React from 'react';

import { ProductCard } from '../components/ProductCard';

const API = 'https://api.escuelajs.co/api/v1/products?limit=30&offset=0';

function ProductsList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(API)
      const data = await response.json()
      setProducts(data)
    }

    fetchAPI()
  }, [])


  return (
    <section className="my-8">
      <div className="grid grid-cols-autosm gap-6 place-content-center   sm:grid-cols-automd">

        {products.map(product => (
          <ProductCard
            key={product.id}
            price={`$ ${product.price}`}
            title={product.title}
            image={product.images[0]}
          />
        ))}

      </div>
    </section>
  );
}

export { ProductsList }