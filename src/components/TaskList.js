import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Tasks from "./Tasks";
import Spinner from "react-bootstrap/Spinner";

const fetchTasks = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/tasks");
    return data;
  } catch (err) {
    return [];
  }
};
export default class TaskList extends Component {
  state = { tasks: ["Loading"] };

  async componentDidMount() {
    const fetchedTasks = await fetchTasks();
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
    } else if (this.state.tasks.length > 0) {
      return this.state.tasks.map((task) => (
        <Tasks task={task} key={task.id} />
      ));
    } else {
      return (
        <Row className="text-center fs-3">
          <span>No tasks available.</span>
        </Row>
      );
    }
  }

  render() {
    return <Row className="justify-content-center">{this.renderJSX()}</Row>;
  }
}
