import { useState } from "react";
import Button from "./Button";

const AddTaskForm = () => {
  const [taskForm, setTaskForm] = useState({
    taskName: "",
    time: "",
    date: "",
    reminder: false,
  });

  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text">Task name:</span>
        <input
          type="text"
          className="form-control"
          placeholder="Do the dishes"
          onChange={(e) =>
            setTaskForm({ ...taskForm, taskName: e.target.value })
          }
          required
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Time:</span>
        <input
          type="time"
          className="form-control"
          onChange={(e) => setTaskForm({ ...taskForm, time: e.target.value })}
          required
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Date:</span>
        <input
          type="date"
          className="form-control"
          onChange={(e) => setTaskForm({ ...taskForm, date: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="reminder" className='me-3 h5'>Reminder?</label>
        <input
          type="checkbox"
          id="reminder"
          onChange={(e) => setTaskForm({ ...taskForm, reminder: e.target.checked })}
        />
      </div>
      <Button text="Submit Task" backgroundColor="green" color="black" />
    </form>
  );
};

export default AddTaskForm;
