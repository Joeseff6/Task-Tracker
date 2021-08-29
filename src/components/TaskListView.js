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
              {this.state.show ? <AddTaskForm /> : "Nothing to show"}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

// const [tasks, setTasks] = useState([]);
// const [addTask, setAddTask] = useState(false);

//   return (
//     <div className="row justify-content-center">
//       <div className="col col-sm-9 taskListView">
//         <div className="row mt-2 pb-2 align-items-center">
//           <div className="col">
//             <h2 className="text-center">My Task List</h2>
//           </div>
//         </div>
//         <div className="row d-block">
//           <div className="col-4 m-auto">
//             {addTask ? (
//               <Button
//                 text="Close Form"
//                 backgroundColor="yellow"
//                 onClick={handleToggleForm}
//               />
//             ) : (
//               <Button
//                 text="Add Tasks"
//                 backgroundColor="green"
//                 onClick={handleToggleForm}
//               />
//             )}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             {addTask ? (
//               <AddTaskForm />
//             ) : tasks.length > 0 ? (
//               <>
//                 <div className="row">
//                   <div
//                     className="col"
//                     style={{ borderBottom: "black 2px solid" }}
//                   >
//                     <h3 className="text-center mb-3">Sort by:</h3>
//                   </div>
//                   <DateCategory onClick={sortFunctions} />
//                 </div>
//                 <Tasks tasks={tasks} onDoubleClick={handleToggleReminder} />
//               </>
//             ) : (
//               <h1 className="text-center my-5">No tasks available</h1>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const getTasks = async () => {
//   const { data } = await axios.get("http://localhost:5000/tasks");
//   console.log(data);
//   setTasks(data);
// };

// useEffect(() => {
//   getTasks();
// }, []);

// const handleToggleForm = () => {
//   setAddTask(!addTask);
// };

// const handleToggleReminder = (e) => {
//   const index = e.target.dataset.index;
//   tasks[index].reminder = !tasks[index].reminder;
//   setTasks([...tasks]);
// };

// const sortByPastDue = async () => {
//   await getTasks();
//   console.log(tasks);
//   const filteredTasks = tasks.filter((task) => {
//     const taskDate = parseInt(task.date.split("/")[1]);
//     console.log(taskDate < today);
//     return taskDate < today;
//   });
//   setTasks([...filteredTasks]);
// };

// const sortByToday = async () => {
//   await getTasks();
//   console.log(tasks);
//   const filteredTasks = tasks.filter((task) => {
//     const taskDate = parseInt(task.date.split("/")[1]);
//     return taskDate === today;
//   });
//   setTasks([...filteredTasks]);
// };

// const sortByTomorrow = () => {
//   getTasks();
//   const taskDate = parseInt(tasks[0].date.split("/")[1]);
//   const filteredTasks = tasks.filter((task) => {
//     const taskDate = parseInt(task.date.split("/")[1]);
//     return taskDate < today;
//   });
//   setTasks(filteredTasks);
// };

// const sortByThisWeek = () => {
//   getTasks();
//   const taskDate = parseInt(tasks[0].date.split("/")[1]);
//   const filteredTasks = tasks.filter((task) => {
//     const taskDate = parseInt(task.date.split("/")[1]);
//     return taskDate < today;
//   });
//   setTasks(filteredTasks);
// };

// const sortByThisMonth = () => {
//   getTasks();
//   const taskDate = parseInt(tasks[0].date.split("/")[1]);
//   const filteredTasks = tasks.filter((task) => {
//     const taskDate = parseInt(task.date.split("/")[1]);
//     return taskDate < today;
//   });
//   setTasks(filteredTasks);
// };

// const sortFunctions = [
//   sortByPastDue,
//   sortByToday,
//   sortByTomorrow,
//   sortByThisWeek,
//   sortByThisMonth,
//   getTasks,
// ];
