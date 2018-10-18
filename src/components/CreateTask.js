import React from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { addTask } from "../actions/tasksActions";
const CreateTask = props => (
  <div>
    <h3>Create Task</h3>
    <TaskForm
      onSubmit={task => {
        props.dispatch(addTask(task));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(CreateTask);
