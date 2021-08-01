import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <div className='row'>
      {tasks.map((task) => (
        <div className="col-4" key={task.id} style={{borderBottom: 'black 2px solid', borderRight: 'black 2px solid'}}>
          <h6>{task.task}</h6>
          <span>{task.date}</span>
          <span>{task.reminder}</span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
