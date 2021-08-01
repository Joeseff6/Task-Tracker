import React from "react";
import Button from "./Button";

const TaskListView = () => {
  return (
    <div className="row justify-content-center">
      <div className="col col-sm-6 taskListView">
        <div
          className="row mt-2 pb-2 align-items-center"
          style={{ borderBottom: "black 2px solid" }}
        >
          <div className="col">
            <h2 className="text-center">My Task List</h2>
          </div>
          <div className="col">
            <Button text="Add Task" backgroundColor="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListView;
