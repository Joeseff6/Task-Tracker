import { useState } from "react";
import Button from "./Button";

const AddTaskForm = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text">
          Task name:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Do the dishes"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          Time:
        </span>
        <input
          type="time"
          className="form-control"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          Date:
        </span>
        <input
          type="date"
          className="form-control"
        />
      </div>
      <div
        className="btn-group"
        role="group"
      >
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
        />
        <label className="btn btn-outline-primary" htmlFor="btncheck1">
          Reminder?
        </label>
      </div>
      <Button text='Submit Task' backgroundColor='green' color='black'/>
    </form>
  );
};

export default AddTaskForm;
