import React, { Component } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SignupForm extends Component {
  state = { username: "", email: "", password: "" };

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
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="email123@email.com"
            onChange={(e) => this.setState({ email: e.target.value })}
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
        <Button as="input" type="submit" value="Submit" variant="dark"></Button>
      </Form>
    );
  }
}
