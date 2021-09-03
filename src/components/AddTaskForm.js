import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class AddTaskForm extends Component {
  constructor(props) {
    super(props);

    this.onTimeChange = this.onTimeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = { task: "", time: "", date: "", reminder: false };
  }

  onTimeChange (e) {
    const timeArr = e.target.value.split(":");
    const [hour, minute] = timeArr;
    if (parseInt(hour) === 0) {
      this.setState({ time: `12:${minute} AM`});
    } else if (parseInt(hour) === 12) {
      this.setState({ time: `${parseInt(hour)}:${minute} PM` });
    } else if (parseInt(hour) > 12) {
      this.setState({ time: `${parseInt(hour) - 12}:${minute} PM` });
    } else {
      this.setState({ time: `${parseInt(hour)}:${minute} AM` });
    }
  };

  onFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted")
  }
  
  onDateChange(e) {
    const dateArr = e.target.value.split("-").map((element) => parseInt(element));
    const [year, month, day] = dateArr;
    this.setState({ date: `${month}/${day}/${year}` });
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
            onChange={this.onTimeChange}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl
            type="date"
            onChange={this.onDateChange}
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
        <Button variant="dark" type="submit" as="input" value="Submit" onSubmit={this.onFormSubmit}/>
      </Form>
    );
  }
}
