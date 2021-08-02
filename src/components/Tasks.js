import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div className='row'>
      {tasks.map((task) => (
        <div className="col-3" key={task.id} style={{borderBottom: 'black 2px solid', borderRight: 'black 2px solid'}}>
          <h5>{task.task}</h5>
          <h6>{task.date}</h6>
          <h6>{task.reminder}</h6>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
