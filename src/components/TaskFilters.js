import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByPriority,
  setStatusFilter
} from "../actions/filtersActions";

const TaskFilters = props => (
  <div className="app-container">
    <div className="input-group">
      <div className="input-group__item">
        <input
          className="input-text"
          type="text"
          placeholder="Поиск"
          value={props.filters.text}
          onChange={e => {
            props.dispatch(setTextFilter(e.target.value));
          }}
        />
      </div>
      <div className="input-group__item">
        <select
          className="input-select"
          value={props.filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") {
              return props.dispatch(sortByDate());
            } else if (e.target.value === "priority") {
              return props.dispatch(sortByPriority());
            }
          }}
        >
          <option value="date">Дата</option>
          <option value="priority">Приоритет</option>
        </select>
      </div>
      <div className="input-group__item">
        <select
          className="input-select"
          value={props.filters.status}
          onChange={e => {
            switch (e.target.value) {
              case "Планирование":
                return props.dispatch(setStatusFilter("Планирование"));
              case "В процессе":
                return props.dispatch(setStatusFilter("В процессе"));
              case "Выполнено":
                return props.dispatch(setStatusFilter("Выполнено"));
              default:
                return props.dispatch(setStatusFilter(undefined));
            }
          }}
        >
          <option value="">Все статусы</option>
          <option value="Планирование">Планирование</option>
          <option value="В процессе">В процессе</option>
          <option value="Выполнено">Выполнено</option>
        </select>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(TaskFilters);
