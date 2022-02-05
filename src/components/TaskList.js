import "./TaskList.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tasks from "./Tasks";
import Spinner from "react-bootstrap/Spinner";

const TaskList = ({ tasks, onClickEditBtn }) => {
  const renderTasks = () => {
    if (tasks.length) {
      return (
        <Row className="justify-content-center overflow-auto" id="taskList">
          <Col lg={8}>
            {tasks.map((task, index) => (
              <Tasks
                task={task}
                key={task.id}
                index={index}
                onClickEditBtn={onClickEditBtn}
              />
            ))}
          </Col>
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

  return tasks ? (
    renderTasks()
  ) : (
    <Spinner className="d-block m-auto" animation="border" role="status" />
  );
};
export default TaskList;
