import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import { db } from "../db/db";

const App = () => {
  const [addTask, setAddTask] = useState(false);

  const onFormSubmit = () => {
    setAddTask(false);
  };

  const renderComponent = () => {
    return addTask ? <AddTaskForm onFormSubmit={onFormSubmit} /> : <TaskList />;
  };

  const onClearButtonClick = async (e) => {
    const completedTasks = await db.tasks.where("complete").equals("true").toArray();
    console.log(completedTasks);
  };

  return (
    <Container fluid="md" className="mb-5">
      <header>
        <h1 className="text-center">Task Tracker</h1>
      </header>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="col-9">
            <Card.Body className="text-center">
              <Card.Title className="fs-1 mb-4">Your Task List</Card.Title>
              <Card.Subtitle className="fs-5 mb-3">
                Add, remove, and update tasks!
              </Card.Subtitle>
              <Button
                variant={!addTask ? "success" : "warning"}
                style={{ width: "150px", color: "black" }}
                onClick={() => setAddTask(!addTask)}
                className="mb-3 mx-3 m-auto"
              >
                {addTask ? "View Tasks" : "Add Task"}
              </Button>

              <Button
                variant={!addTask ? "success" : "warning"}
                style={{ width: "200px", color: "black" }}
                className="mb-3 mx-3 m-auto"
                onClick={onClearButtonClick}
              >
                Clear Completed Tasks
              </Button>
              {renderComponent()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
