import React from "react";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import tasksFilter from "../filters/tasksFilter";

const TaskList = props => (
  <div>
    <h3>Task List</h3>
    {props.tasks.map(task => {
      return <TaskItem key={task.id} {...task} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    tasks: tasksFilter(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TaskList);
