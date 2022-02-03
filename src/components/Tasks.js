import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { db } from "../db/db";
import "./Tasks.css";

class Tasks extends React.Component {
  onCheckboxClick = (e) => {
    db.tasks.update(this.props.task.id, { complete: e.target.checked });
  };

  render() {
    return (
      <Card className={this.props.task.complete ? "completedTask" : "bg-light"}>
        <button className="btn btn-danger">X</button>
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
              checked={this.props.task.complete ? true : false}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Tasks;
