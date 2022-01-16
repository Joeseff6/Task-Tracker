import "./App.css";
import Header from "./components/Header";
import TaskListView from "./components/TaskListView";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


class App extends React.Component {
  render() {
    return (
      <Container fluid="md">
        <Header />
        <TaskListView />
      </Container>
    );
  }
}

export default App;