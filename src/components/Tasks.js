import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Tasks = ({ task }) => {
  console.log(task)
  return (
    <Col md={5} key={task.id}>
      <Card bg="light" className="mb-3">
        <Card.Body>
          <Card.Title>{task.task}</Card.Title>
          <Card.Text>{task.date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Tasks
