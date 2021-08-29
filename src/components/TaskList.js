import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Tasks from "./Tasks";

const fetchTasks = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/tasks");
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default class TaskList extends Component {
  state = { tasks: [] };

  async componentDidMount() {
    const fetchedTasks = await fetchTasks();
    this.setState({ tasks: fetchedTasks });
  }

  render() {
    if (this.state.tasks.length > 0) {
      return (
        <Row className="justify-content-center">
          {this.state.tasks.map((task) => (
            <Tasks task={task} />
          ))}
        </Row>
      );
    } else {
      return (
        <Row className="text-center fs-3">
          <span>No tasks available.</span>
        </Row>
      );
    }
  }
}
