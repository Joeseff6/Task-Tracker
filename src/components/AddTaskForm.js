import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { db } from "../db/db";
export default class AddTaskForm extends Component {
  state = { task: "", time: "", date: "" };

  componentDidMount() {
    if (Object.keys(this.props.defaultTask).length) {
      this.setState({
        task: this.props.defaultTask.task,
        date: this.props.defaultTask.date,
        time: this.props.defaultTask.time,
      });
    }
  }

  onInputChange = (e) => {
    const str = e.target.value;
    if (str.length) {
      const capitalizedString = str[0].toUpperCase() + str.slice(1, str.length);
      this.setState({ task: capitalizedString });
    } else {
      this.setState({ task: "" });
    }
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(this.props.defaultTask).length) {
      await db.tasks.update(this.props.defaultTask.id, {
        task: this.state.task,
        date: this.state.date,
        time: this.state.time,
      });
    } else {
      await db.tasks.add({
        task: this.state.task,
        date: this.state.date,
        time: this.state.time,
        complete: false,
      });
    }
    this.props.onFormSubmit();
  };

  render() {
    return (
      <Form className="mb-3 col-sm-9 mx-auto" onSubmit={this.onFormSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Task</InputGroup.Text>
          <FormControl
            placeholder="Do the dishes"
            type="text"
            value={this.state.task}
            onChange={this.onInputChange}
            maxLength="50"
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Time</InputGroup.Text>
          <FormControl
            type="time"
            onChange={(e) => this.setState({ time: e.target.value })}
            value={this.state.time}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Date</InputGroup.Text>
          <FormControl
            type="date"
            onChange={(e) => this.setState({ date: e.target.value })}
            value={this.state.date}
            required
          />
        </InputGroup>
        <Button variant="dark" type="submit" as="input" value="Submit" />
      </Form>
    );
  }
}
