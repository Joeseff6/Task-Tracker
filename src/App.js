import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { db } from "./db/db";

class App extends React.Component {
  state = { addTask: false, tasks: ["Loading"] };

  renderComponent() {
    return this.state.addTask ? (
      <AddTaskForm />
    ) : (
      <TaskList tasks={this.state.tasks} />
    );
  }

  async fetchTasks() {
    try {
      const { data } = await axios.get("http://localhost:5000/tasks");
      return data;
    } catch (err) {
      return ["Error"];
    }
  }

  async componentDidMount() {
  }

  render() {
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
                  variant={!this.state.addTask ? "success" : "warning"}
                  style={{ width: "150px", color: "black" }}
                  onClick={() =>
                    this.setState({ addTask: !this.state.addTask })
                  }
                  className="mb-3"
                >
                  Add Task
                </Button>
                {this.renderComponent()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
