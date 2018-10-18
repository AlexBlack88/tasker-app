import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByPriority,
  setStatusFilter
} from "../actions/filtersActions";

const TaskFilters = props => (
  <div>
    {console.log(props)}
    <label>search filter </label>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <label>Sort by: </label>
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === "date") {
          return props.dispatch(sortByDate());
        } else if (e.target.value === "priority") {
          return props.dispatch(sortByPriority());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="priority">Priority</option>
    </select>
    <label>Filter by status: </label>
    <select
      value={props.filters.status}
      onChange={e => {
        switch (e.target.value) {
          case "planning":
            return props.dispatch(setStatusFilter("planning"));
          case "in process":
            return props.dispatch(setStatusFilter("in process"));
          case "finished":
            return props.dispatch(setStatusFilter("finished"));
          default:
            return props.dispatch(setStatusFilter(undefined));
        }
      }}
    >
      <option value="default">All</option>
      <option value="planning">Planning</option>
      <option value="in process">In process</option>
      <option value="finished">Finished</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TaskFilters);
