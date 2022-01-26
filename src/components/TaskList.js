import "./TaskList.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Tasks from "./Tasks";
import Spinner from "react-bootstrap/Spinner";
import { db } from "../db/db";
import { useLiveQuery } from "dexie-react-hooks";

const TaskList = () => {
  const tasks = useLiveQuery(() => db.tasks.toArray());

  const renderTasks = () => {
    if (tasks[0] === "Loading") {
      return (
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" />
          <span className="fs-3">Fetching tasks...</span>
        </Row>
      );
    }
    if (tasks[0] === "Error") {
      return (
        <Row className="text-center fs-3">
          <span className="fs-3">Error, couldn't reach the server</span>
        </Row>
      );
    }
    if (tasks.length) {
      return (
        <Row className="justify-content-center overflow-auto" id="taskList">
          {tasks.map((task, index) => (
            <Tasks task={task} key={task.id} index={index} />
          ))}
        </Row>
      );
    }
    if (!tasks.length) {
      return (
        <Row className="text-center fs-3">
          <span className="fs-3">No tasks available.</span>
        </Row>
      );
    }
  };

  return tasks ? renderTasks() : "Please wait";
};
export default TaskList;
