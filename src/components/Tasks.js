import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import Button from "react-bootstrap/Button";

const Tasks = ({ task }) => {
  return (
    <Col md={5}>
      <Card bg="light" className="mb-3">
        <Card.Body>
          <Card.Title>Task: {task.task}</Card.Title>
          <Card.Text>
            Date: {task.date} <br />
            Time: {task.time} <br />
            <Button variant="light" style={{ border: "2px black solid" }}>
              Reminder? {task.reminder ? <BsCheckCircle fill="green"/> : <BsXCircle fill="red"/>}
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Tasks;
