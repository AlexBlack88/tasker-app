import React from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { startEditTask } from "../actions/tasksActions";
import { startRemoveTask } from "../actions/tasksActions";

const EditTask = props => {
  console.log(props);
  return (
    <div>
      <div className="page-header">
        <div className="app-container">
          <h1 className="page-header__title">Редактировать задачу</h1>
        </div>
      </div>
      <div className="app-container">
        <TaskForm
          task={props.task}
          onSubmit={task => {
            props.dispatch(startEditTask(props.task.id, task));
            props.history.push("/dashboard");
          }}
        />
        <button
          className="button button--warning"
          onClick={() => {
            // console.log("removed");
            props.dispatch(startRemoveTask({ id: props.task.id }));
            props.history.push("/dashboard");
          }}
        >
          Удалить задачу
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    task: state.tasks.find(task => task.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditTask);
