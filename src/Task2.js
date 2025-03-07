// Example 2: Product Display


import React from 'react';


function ProductDisplay() {
  return <Product name='MAC' price={100000} />;
}


const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};

export default ProductDisplay;
