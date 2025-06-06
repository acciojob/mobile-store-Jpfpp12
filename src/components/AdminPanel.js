import React, { useState } from 'react';
import products from './products';

function AdminPanel() {
  const [productList, setProductList] = useState(products);

  const handleDelete = (id) => {
    const updatedList = productList.filter((product) => product.id !== id);
    setProductList(updatedList);
  };

  const handleEdit = (id, updatedProduct) => {
    const updatedList = productList.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProductList(updatedList);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            <button
            className='btn'
              onClick={() =>
                handleEdit(product.id, {
                  name: `${product.name} (Updated)`,
                  price: product.price + 100
                })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
