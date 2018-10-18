import React from "react";
import moment from "moment";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.task ? props.task.description : "",
      status: props.task ? props.task.status : "",
      priority: props.task ? props.task.priority : 1,
      createdAt: props.task
        ? moment(props.task.createdAt).format("LL")
        : moment().format("LL"),
      note: props.task ? props.task.note : "",
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onStatusChange = e => {
    const status = e.target.value;
    this.setState(() => ({ status }));
  };

  onPriorityChange = e => {
    const priority = e.target.value;
    const regex = /^(?:[1-9]|0[1-9]|10)$/;
    if (!priority || priority.match(regex)) {
      this.setState(() => ({ priority }));
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log("submitted!");
    if (!this.state.description || !this.state.status) {
      this.setState(() => ({
        error: "Please provide correct description and set task status!"
      }));
    } else {
      // console.log("submitted");
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        status: this.state.status,
        createdAt: this.state.createdAt,
        priority: parseFloat(this.state.priority, 10),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <select value={this.state.status} onChange={this.onStatusChange}>
            <option value="">Set status</option>
            <option value="planning">Planning</option>
            <option value="in process">In process</option>
            <option value="finished">Finished</option>
          </select>
          <input
            type="number"
            placeholder="priority"
            value={this.state.priority}
            onChange={this.onPriorityChange}
          />
          <textarea
            placeholder="Please add your note here(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Create Task</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
