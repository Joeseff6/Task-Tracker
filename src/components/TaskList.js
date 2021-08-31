import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Tasks from "./Tasks";
import Spinner from "react-bootstrap/Spinner";

export default class TaskList extends Component {
  state = { tasks: ["Loading"] };

  async fetchTasks() {
    try {
      const { data } = await axios.get("http://localhost:5000/tasks");
      return data;
    } catch (err) {
      return ["Error"];
    }
  }

  async componentDidMount() {
    const fetchedTasks = await this.fetchTasks();
    this.setState({ tasks: fetchedTasks });
  }

  renderJSX() {
    if (this.state.tasks[0] === "Loading") {
      return (
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" />
          <span className="fs-3">Fetching tasks...</span>
        </Row>
      );
    }

    if (this.state.tasks[0] === "Error") {
      return (
        <Row className="text-center fs-3">
          <span className="fs-3">Error, couldn't reach the server</span>
        </Row>
      );
    }

    if (this.state.tasks.length > 0) {
      return this.state.tasks.map((task) => <Tasks task={task} key={task.id}/>);
    }

    if (this.state.tasks.length === 0) {
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
