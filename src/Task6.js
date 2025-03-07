// Example 4: Job Posting


import React from 'react';


function JobInfo() {
  return <Job title='Developer' company='wipro' />;
}


const Job = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Company: {props.company}</p>
    </div>
  );
};


export default JobInfo;
