import React from "react";
import TaskList from "./TaskList";
import TaskFilters from "./TaskFilters";
import TaskSummary from "./TaskSummary";

const TaskDashboard = () => (
  <div>
    <TaskSummary />
    <TaskFilters />
    <TaskList />
  </div>
);

export default TaskDashboard;
