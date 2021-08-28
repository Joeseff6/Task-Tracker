import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

export default class LoginForm extends Component {
  state = { username: "", password: "" };

  render() {
    return (
      <Form className="mb-3 col-sm-9 mx-auto">
        <FloatingLabel
          controlId="floatingUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="user123"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="mysecretpassword"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </FloatingLabel>
        <Button as="input" type="submit" value="Submit" variant="dark" />
      </Form>
    );
  }
}
