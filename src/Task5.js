// Example 4: Car Component


import React from 'react';


function CarInfo() {
  return <Car brand='BMW' model='0.9' />;
}


const Car = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <p>Model: {props.model}</p>
    </div>
  );
};


export default CarInfo;