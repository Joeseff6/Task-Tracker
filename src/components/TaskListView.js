// import { useState, useEffect } from "react";
// import Button from "./Button";
// import DateCategory from "./DateCategory";
// import axios from "axios";
// import Tasks from "./Tasks";
// const date = new Date();
// const today = parseInt(date.getDate());

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddTaskForm from "./AddTaskForm";
import React, { Component } from "react";
import TaskList from "./TaskList";

export default class TaskListView extends Component {
  state = { show: false };

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
                variant={!this.state.show ? "success" : "warning"}
                style={{ width: "150px", color: "black" }}
                onClick={() => this.setState({ show: !this.state.show })}
                className="mb-3"
              >
                Add Task
              </Button>
              {this.state.show ? <AddTaskForm /> : <TaskList />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
