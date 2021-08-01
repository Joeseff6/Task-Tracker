import { useState, useEffect } from 'react';
import Button from './Button';
import DateCategory from './DateCategory';
import axios from 'axios';
import Tasks from './Tasks';

const TaskListView = () => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    getTasks();
  },[])

  const getTasks = async() => {
    const { data } = await axios.get('http://localhost:5000/tasks');
    setTasks(data)
  }

  return (
    <div className='row justify-content-center'>
      <div className='col col-sm-9 taskListView'>
        <div
          className='row mt-2 pb-2 align-items-center'
          style={{ borderBottom: 'black 2px solid' }}
        >
          <div className='col'>
            <h2 className='text-center'>My Task List</h2>
          </div>
          <div className='col'>
            <Button text='Add Task' backgroundColor='green' />
          </div>
        </div>
        <div className='row'>
          <div className='col-4' style={{borderRight: 'black 2px solid'}}>
            <DateCategory />
          </div>
          <div className='col-8'>
            <Tasks tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListView;
