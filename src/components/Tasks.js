import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class Tasks extends React.Component {
  render() {
    return (
      <Col md={5}>
        <Card bg="light" className="mb-3">
          <Card.Body>
            <Card.Title>Task: {this.props.task.task}</Card.Title>
            <Card.Text>
              Date: {this.props.task.date} <br />
              Time: {this.props.task.time} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Tasks;
