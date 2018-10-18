//Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  status: ""
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_STATUS_FILTER":
      return {
        ...state,
        status: action.status
      };
    case "SORT_BY_PRIORITY":
      return {
        ...state,
        sortBy: "priority"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    default:
      return state;
  }
};
