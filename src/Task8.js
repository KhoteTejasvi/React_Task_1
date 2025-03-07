// Example 8: Task Component

import React from 'react';

function Task() {
  return <TaskDetails name="Shopping" status="Pending" />;  // ✅ Use TaskDetails instead of Task
}

const TaskDetails = (props) => {
  return (
    <div>
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
    </div>
  );
};

export default Task;  // ✅ Export the correct component
