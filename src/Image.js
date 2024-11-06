
import React from 'react';
import product from './product';

function Image() {
  return <img src={product.imageUrl}
   alt={product.name} 
   style={{ width: '50%', display: 'block', margin:'auto' }} />;
}

export default Image;
