import React from 'react';


function Greeting() {
  return <Welcome name='Tejasvi' age={23} />;
}


const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age}</p>
    </div>
  );
}


export default Greeting;
