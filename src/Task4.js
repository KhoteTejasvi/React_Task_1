// Example 4: Student Details


import React from 'react';


function StudentDetails() {
  return <Student name='Teju' grade='O+' />;
}


const Student = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Grade: {props.grade}</p>
    </div>
  );
};

export default StudentDetails