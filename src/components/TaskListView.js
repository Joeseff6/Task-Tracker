import { useState, useEffect } from "react";
import Button from "./Button";
import DateCategory from "./DateCategory";
import axios from "axios";
import Tasks from "./Tasks";
import AddTaskForm from "./AddTaskForm";

const TaskListView = () => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/tasks");
    setTasks(data);
  };

  const handleToggle = () => {
    setAddTask(!addTask);
  };

  return (
    <div className="row justify-content-center">
      <div className="col col-sm-9 taskListView">
        <div className="row mt-2 pb-2 align-items-center">
          <div className="col">
            <h2 className="text-center">My Task List</h2>
          </div>
        </div>
        <div className="row d-block">
          <div className="col-4 m-auto">
            {addTask ? (
              <Button
                text="Close Form"
                backgroundColor="yellow"
                onClick={handleToggle}
              />
            ) : (
              <Button
                text="Add Tasks"
                backgroundColor="green"
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ borderBottom: "black 2px solid" }}>
            <h3 className="text-center mb-3">Sort by:</h3>
          </div>
          <DateCategory />
        </div>
        <div className="row">
          <div className="col">
            {addTask ? <AddTaskForm /> : <Tasks tasks={tasks} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListView;
