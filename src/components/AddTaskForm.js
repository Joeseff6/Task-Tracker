import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class AddTaskForm extends Component {
  state = { task: "", time: "", date: "", reminder: false };

  formatTime (time) {
    const timeArr = time.split(":");
    const [hour, minute] = timeArr;
    if (parseInt(hour) === 0) {
      return `12:${minute} AM`;
    } else if (parseInt(hour) === 12) {
      return `${parseInt(hour)}:${minute} PM`;
    } else if (parseInt(hour) > 12) {
      return `${parseInt(hour) - 12}:${minute} PM`;
    } else {
      return `${parseInt(hour)}:${minute} AM`;
    }
  };
  
  formatDate(date) {
    const dateArr = date.split("-").map((element) => parseInt(element));
    const [year, month, day] = dateArr;
    return `${month}/${day}/${year}`;
  };

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
              let formattedTime = this.formatTime(e.target.value);
              this.setState({ time: formattedTime });
            }}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl
            type="date"
            onChange={(e) => {
              let formattedDate = this.formatDate(e.target.value);
              this.setState({ date: formattedDate });
            }}
            required
          />
        </InputGroup>
        <Form.Check
          type="checkbox"
          label="Reminder?"
          id="reminder"
          className="text-start"
          onChange={() => this.setState({ reminder: !this.state.reminder })}
        />
        <Button variant="dark" type="submit" as="input" value="Submit" />
      </Form>
    );
  }
}
