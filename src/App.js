import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import TaskListView from "./components/TaskListView";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid="md">
      <Header />
      <TaskListView />
      {/* <Router>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Router> */}
    </Container>
  );
}

export default App;
