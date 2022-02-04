import React from "react";
import Card from "react-bootstrap/Card";
import { db } from "../db/db";
import "./Tasks.css";

class Tasks extends React.Component {
  onCheckboxClick = (e) => {
    db.tasks.update(this.props.task.id, { complete: e.target.checked ? "true" : "false" });
  };

  onRemoveButtonClick = () => {
    db.tasks.delete(this.props.task.id);
  }

  render() {
    return (
      <Card className={this.props.task.complete === "true" ? "completedTask" : "bg-light"}>
        <button className="btn btn-danger" onClick={this.onRemoveButtonClick}>X</button>
        <Card.Body>
          <Card.Title>{this.props.task.task}</Card.Title>
          <Card.Text>
            Date: {this.props.task.date} <br />
            Time: {this.props.task.time} <br />
            Completed?
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.onCheckboxClick}
              checked={this.props.task.complete === "true" ? true : false}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Tasks;
