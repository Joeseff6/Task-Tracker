import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import Button from "react-bootstrap/Button";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonClick = () => {
    this.props.onToggle(this.props.index)
  }

  render() {
    return (
      <Col md={5}>
        <Card bg="light" className="mb-3">
          <Card.Body>
            <Card.Title>Task: {this.props.task.task}</Card.Title>
            <Card.Text>
              Date: {this.props.task.date} <br />
              Time: {this.props.task.time} <br />
              <Button variant="light" style={{ border: "2px black solid"}} onClick={this.onButtonClick}>
                Reminder? {this.props.task.reminder ? <BsCheckCircle fill="green"/> : <BsXCircle fill="red"/>}
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Tasks;
