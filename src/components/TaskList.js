import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Tasks from "./Tasks";
import Spinner from "react-bootstrap/Spinner";

export default class TaskList extends Component {
  renderJSX() {
    if (this.props.tasks[0] === "Loading") {
      return (
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" />
          <span className="fs-3">Fetching tasks...</span>
        </Row>
      );
    }
    if (this.props.tasks[0] === "Error") {
      return (
        <Row className="text-center fs-3">
          <span className="fs-3">Error, couldn't reach the server</span>
        </Row>
      );
    }
    if (this.props.tasks.length) {
      return this.props.tasks.map((task, index) => (
        <Tasks
          task={task}
          key={task.id}
          index={index}
          onToggle={this.onToggle}
        />
      ));
    }
    if (!this.props.tasks.length) {
      return (
        <Row className="text-center fs-3">
          <span className="fs-3">No tasks available.</span>
        </Row>
      );
    }
  }

  render() {
    return <Row className="justify-content-center">{this.renderJSX()}</Row>;
  }
}
