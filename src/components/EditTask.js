import React from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { editTask } from "../actions/tasksActions";
import { removeTask } from "../actions/tasksActions";

const EditTask = props => {
  console.log(props);
  return (
    <div>
      <TaskForm
        task={props.task}
        onSubmit={task => {
          props.dispatch(editTask(props.task.id, task));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          // console.log("removed");
          props.dispatch(removeTask({ id: props.task.id }));
          props.history.push("/");
        }}
      >
        Remove Task
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    task: state.tasks.find(task => task.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditTask);
