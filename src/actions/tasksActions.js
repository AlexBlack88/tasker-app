import uuid from "uuid";
import moment from "moment";
//Tasks Actions
//======//
//ADD_TASK

export const addTask = ({
  description = "",
  note = "",
  priority = 0,
  status = "",
  createdAt = moment().format("MMM Do YY")
} = {}) => ({
  type: "ADD_TASK",
  tasks: {
    id: uuid(),
    description,
    note,
    priority,
    status,
    createdAt
  }
});
//REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
  type: "REMOVE_TASK",
  id
});
//EDIT_TASK
export const editTask = (id, updates) => ({
  type: "EDIT_TASK",
  id,
  updates
});
