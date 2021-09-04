import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddTaskForm from "./AddTaskForm";
import React, { Component } from "react";
import TaskList from "./TaskList";

export default class TaskListView extends Component {
  state = { addTask: false };

  renderJSX() {
    if (this.state.addTask) {
      return (
        <Row>
          <AddTaskForm display=""/>
          <TaskList display="d-none"/>
        </Row>
      );
    } else {
      return (
        <Row>
          <AddTaskForm display="d-none"/>
          <TaskList display=""/>
        </Row>
      );
    }
  }

  render() {
    return (
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="col-9">
            <Card.Body className="text-center">
              <Card.Title className="fs-1 mb-4">Your Task List</Card.Title>
              <Card.Subtitle className="fs-5 mb-3">
                Add, remove, and update tasks!
              </Card.Subtitle>
              <Button
                variant={!this.state.addTask ? "success" : "warning"}
                style={{ width: "150px", color: "black" }}
                onClick={() => this.setState({ addTask: !this.state.addTask })}
                className="mb-3"
              >
                Add Task
              </Button>
              {this.renderJSX()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
