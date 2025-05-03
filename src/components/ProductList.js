import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';

function ProductList() {
  return (
    <div>
      <h2>Product Listings</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
