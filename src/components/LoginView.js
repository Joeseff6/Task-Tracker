import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginView = () => {
  return (
    <Row>
      <Col className="justify-content-center d-flex">
        <Card className="col-sm-8">
          <Card.Body className="text-center">
            <Card.Title className="fs-1 mb-4">Login!</Card.Title>
            <Card.Subtitle className="fs-5 mb-3">
              Login to log tasks.
            </Card.Subtitle>
            <LoginForm />
            <Link to="/signup">Not a user yet? Sign up!</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginView;
