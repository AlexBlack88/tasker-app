import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TaskSummary = props => (
  <div className="page-header">
    <div className="app-container">
      <h1 className="page-header__title">
        Текущих задач: <span>{props.tasks.length}</span>{" "}
      </h1>
      <div className="page-header__nav">
        <Link className="button" to="/create">
          Создать задачу
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TaskSummary);
