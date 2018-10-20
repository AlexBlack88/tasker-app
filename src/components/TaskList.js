import React from "react";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import tasksFilter from "../filters/tasksFilter";

const TaskList = props => (
  <div className="app-container">
    <div className="list-header">
      <div className="mobile-visible">Задачи</div>
      <div className="desktop-visible">Задача</div>
      <div className="desktop-visible">Статус</div>
    </div>
    <div className="list-body">
      {props.tasks.length === 0 ? (
        <div className="list-item list-item--message">
          <span>Нет текущих задач.</span>
        </div>
      ) : (
        props.tasks.map(task => {
          return <TaskItem key={task.id} {...task} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    tasks: tasksFilter(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TaskList);
