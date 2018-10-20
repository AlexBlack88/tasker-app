import React from "react";
import moment from "moment";
import "moment/locale/ru";

import { Link } from "react-router-dom";

const TaskItem = ({ id, description, status, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__date">{moment(createdAt).format("LLL")}</span>
    </div>
    <h3 className="list-item__status">{status}</h3>
  </Link>
);

export default TaskItem;
