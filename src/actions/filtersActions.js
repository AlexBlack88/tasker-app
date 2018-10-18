//Filters Actions
//==========//
//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
//SET_STATUS_FILTER
export const setStatusFilter = (status = "") => ({
  type: "SET_STATUS_FILTER",
  status
});

//SORT_BY_PRIORITY
export const sortByPriority = () => ({
  type: "SORT_BY_PRIORITY"
});
//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
