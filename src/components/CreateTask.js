import React from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { startAddTask } from "../actions/tasksActions";

const CreateTask = props => (
  <div>
    <div className="page-header">
      <div className="app-container">
        <h1 className="page-header__title">Создать задачу</h1>
      </div>
    </div>
    <div className="app-container">
      <TaskForm
        onSubmit={task => {
          props.dispatch(startAddTask(task));
          props.history.push("/dashboard");
        }}
      />
    </div>
  </div>
);

export default connect()(CreateTask);
