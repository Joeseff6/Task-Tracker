import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";



export default class AddTaskForm extends Component {
  state = { task: "", time: "", date: "", reminder: false };

  render() {
    return (
      <Form className="mb-3 col-sm-9 mx-auto">
        <InputGroup className="mb-3">
          <InputGroup.Text>Task</InputGroup.Text>
          <FormControl
            placeholder="Do the dishes"
            type="text"
            onChange={(e) => this.setState({ task: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Time</InputGroup.Text>
          <FormControl
            type="time"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl type="date" onChange={(e) => this.setState({ date: e.target.value })} required />
        </InputGroup>
        <Form.Check
          type="checkbox"
          label="Reminder?"
          id="reminder"
          className="text-start"
          onChange={() => this.setState({ reminder: !this.state.reminder})}
        />
        <Button variant="dark" type="submit" as="input" value="Submit" />
      </Form>
    );
  }
}

// const AddTaskForm = () => {
//   const [taskForm, setTaskForm] = useState({

//   });

// const formatTime = (e) => {
//   let timeArr = e.target.value.split(":");
//   if (parseInt(timeArr[0]) > 12) {
//     const newHour = parseInt(timeArr[0]) - 12;
//     timeArr[0] = newHour.toString();
//     setTaskForm({...taskForm, time: timeArr.join(":") + "PM"});
//   } else {
//     const newHour = parseInt(timeArr[0]);
//     timeArr[0] = newHour.toString();
//     setTaskForm({...taskForm, time: timeArr.join(":") + "AM"});
//   }
// }

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
//       const res = await fetch("http://localhost:5000/tasks", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(taskForm),
//       });
//       const data = await res.json();

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-group mb-3">
//         <span className="input-group-text">Task name:</span>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Do the dishes"
//           onChange={(e) =>
//             setTaskForm({ ...taskForm, task: e.target.value })
//           }
//           required
//         />
//       </div>
//       <div className="input-group mb-3">
//         <span className="input-group-text">Time:</span>
//         <input
//           type="time"
//           className="form-control"
//           onChange={formatTime}
//           required
//         />
//       </div>
//       <div className="input-group mb-3">
//         <span className="input-group-text">Date:</span>
//         <input
//           type="date"
//           className="form-control"
//           onChange={(e) => setTaskForm({ ...taskForm, date: e.target.value })}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="reminder" className="me-3 h5">
//           Reminder?
//         </label>
//         <input
//           type="checkbox"
//           id="reminder"
//           onChange={(e) =>
//             setTaskForm({ ...taskForm, reminder: e.target.checked })
//           }
//         />
//       </div>
//       <Button
//         text="Submit Task"
//         backgroundColor="green"
//         color="black"
//         onSubmit={handleSubmit}
//       />
//     </form>
//   );
// };
