// Example 3: User Profile


import React from 'react';


function UserProfile() {
  return <User username='Tejasvi' city='Pune' />;
}


const User = (props) => {
  return (
    <div>
      <h2>User: {props.name}</h2>
      <p>Location: {props.city}</p>
    </div>
  );
};


export default UserProfile;
