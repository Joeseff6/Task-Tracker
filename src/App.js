import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SignupView from "./components/SignupView";
import LoginView from "./components/LoginView";
import TaskListView from "./components/TaskListView";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid="md">
      <Header />
      {/* <TaskListView /> */}
      <Router>
        <Route exact path="/">
          {/* <LoginView /> */}
        </Route>
        <Route path="/signup">
          <SignupView />
        </Route>
      </Router>
    </Container>
  );
}

export default App;
