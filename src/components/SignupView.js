import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

const SignupView = () => {
  return (
    <Row>
      <Col className="justify-content-center d-flex">
        <Card className="col-sm-8">
          <Card.Body className="text-center">
            <Card.Title className="fs-1 mb-4">Sign Up!</Card.Title>
            <Card.Subtitle className="fs-5 mb-3">
              Not a user? Sign up to log tasks.
            </Card.Subtitle>
            <SignupForm />
            <Link to="/">Already a user? Log in!</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SignupView;
