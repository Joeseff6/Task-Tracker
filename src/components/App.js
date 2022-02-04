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
import { useLiveQuery } from "dexie-react-hooks";

const App = () => {
  const [addTask, setAddTask] = useState(false);
  const [defaultTask, setDefaultTask] = useState({});
  const tasks = useLiveQuery(() => db.tasks.toArray());
  let completeArray = [];
  tasks?.forEach((task) => completeArray.push(task.complete));

  const onFormSubmit = () => {
    setAddTask(false);
  };

  const renderComponent = () => {
    return addTask ? (
      <AddTaskForm onFormSubmit={onFormSubmit} defaultTask={defaultTask} />
    ) : (
      <TaskList tasks={tasks} onClickEditBtn={onClickEditBtn} />
    );
  };

  const onClearButtonClick = async (e) => {
    let taskIds = [];
    const completedTasks = await db.tasks
      .where("complete")
      .equals("true")
      .toArray();
    for (const tasks of completedTasks) {
      taskIds.push(tasks.id);
    }
    db.tasks.bulkDelete(taskIds);
  };

  const onClickEditBtn = (selectedTask) => {
    setAddTask(true);
    setDefaultTask(selectedTask);
  };

  const onToggleAddForm = () => {
    setAddTask(!addTask);
    setDefaultTask({});
  }

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
                variant={addTask ? "warning" : "success"}
                style={{ width: "150px", color: "black" }}
                onClick={onToggleAddForm}
                className="mb-3 mx-3 m-auto"
              >
                {addTask ? "View Tasks" : "Add Task"}
              </Button>
              <Button
                variant="danger"
                style={{ width: "200px", color: "black" }}
                className={
                  completeArray.includes("true") ? "mb-3 mx-3 m-auto" : "d-none"
                }
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
