import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import TaskListView from './components/TaskListView';

function App() {
  return (
    <div className="container-md">
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
    </div>
  );
}

export default App;
