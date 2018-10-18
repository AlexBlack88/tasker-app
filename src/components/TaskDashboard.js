import React from "react";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";

const TaskDashboard = () => (
  <div>
    <h3>Im TaskDashboard!</h3>
    <TaskFilters />
    <TaskList />
  </div>
);

export default TaskDashboard;
