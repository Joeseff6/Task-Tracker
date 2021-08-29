import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const formatTime = (time) => {
  let timeArr = time.split(":").map((element) => parseInt(element));
  let [hour, minute] = timeArr;
  if (hour > 12) {
    return `${hour - 12}:${minute} PM`;
  }
  return `${hour}:${minute} AM`;
};

export default class AddTaskForm extends Component {
  state = { task: "", time: "", date: "", reminder: false };

  render() {
    return (
      <Form className="mb-3 col-sm-9 mx-auto">
        <InputGroup className="mb-3">
          <InputGroup.Text>Task</InputGroup.Text>
          <FormControl
            placeholder="Do the dishes"
            type="text"
            onChange={(e) => this.setState({ task: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Time</InputGroup.Text>
          <FormControl
            type="time"
            onChange={(e) => {
              let formattedTime = formatTime(e.target.value);
              this.setState({ time: formattedTime });
            }}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl type="date" onChange={(e) => this.setState({ date: e.target.value })} required />
        </InputGroup>
        <Form.Check
          type="checkbox"
          label="Reminder?"
          id="reminder"
          className="text-start"
          onChange={() => this.setState({ reminder: !this.state.reminder})}
        />
        <Button variant="dark" type="submit" as="input" value="Submit" />
      </Form>
    );
  }
}
