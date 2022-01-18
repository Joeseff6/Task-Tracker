import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import formatDate from "../helper/formatDate";
import formatTime from "../helper/formatTime";

export default class AddTaskForm extends Component {
  state = { task: "", time: "", date: "" };

  onInputChange = (e) => {
    const str = e.target.value;
    if (str.length) {
      const capitalizedString = str[0].toUpperCase() + str.slice(1, str.length);
      this.setState({ task: capitalizedString });
    } else {
      this.setState({ task: "" });
    }
  };

  onDateChange = (e) => {
    const formattedDate = formatDate(e);
    this.setState({ date: formattedDate });
  };

  onTimeChange = (e) => {
    const formattedTime = formatTime(e);
    this.setState({ time: formattedTime });
  };

  onFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  render() {
    return (
      <Form className="mb-3 col-sm-9 mx-auto">
        <InputGroup className="mb-3">
          <InputGroup.Text>Task</InputGroup.Text>
          <FormControl
            placeholder="Do the dishes"
            type="text"
            value={this.state.task}
            onChange={this.onInputChange}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Time</InputGroup.Text>
          <FormControl type="time" onChange={this.onTimeChange} required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl type="date" onChange={this.onDateChange} required />
        </InputGroup>
        <Button
          variant="dark"
          type="submit"
          as="input"
          value="Submit"
          onSubmit={this.onFormSubmit}
        />
      </Form>
    );
  }
}
