import React from "react";

import { Link } from "react-router-dom";

const TaskItem = ({ id, description, status, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {status} - {createdAt}
    </p>
  </div>
);

export default TaskItem;
