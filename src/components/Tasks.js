import React from 'react';
import Button from './Button';

const Tasks = ({ tasks, onDoubleClick }) => {
  return (
    <div className='row taskRow'>
      {tasks.map((task, index) => (
        <div className='col-3 task' key={task.id}>
          <h5>{task.date}</h5>
          <h5>{task.task}</h5>
          {task.reminder ? (
            <Button text='Reminder: On' onDoubleClick={onDoubleClick} index={index}/>
          ) : (
            <Button text='Reminder: Off' onDoubleClick={onDoubleClick} index={index}/>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tasks;
