// Example 4: Simple Bio


import React from 'react';


function Bio() {
  return <Person name='Ashwini' hobby='Playing' />;
}


const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
};


export default Bio;
