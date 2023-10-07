import React, { useState } from 'react';

const Product = () => {
  const [isInStock, setIsInStock] = useState(true);

  const toggleStock = () => {
    setIsInStock(prevState => !prevState);
  };

  return (
    <div>
      <h2>Product Name: Example Product</h2>
      <p>{isInStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={toggleStock}>Toggle Stock</button>
    </div>
  );
};

export default Product;
