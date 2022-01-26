import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { db } from "../db/db";
import "./Tasks.css";

class Tasks extends React.Component {
  onCheckboxClick = (e) => {
    db.tasks.update(this.props.task.id, {complete: e.target.checked});
  }

  render() {
    return (
      <Row className="taskItem">
        <Card
          className={this.props.task.complete ? "bg-light completedTask" : "bg-light"}
        >
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
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

export default Tasks;
