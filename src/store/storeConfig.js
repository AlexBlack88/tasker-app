import { createStore, combineReducers } from "redux";
import tasksReducer from "../reducers/tasksReducer";
import filtersReducer from "../reducers/filtersReducer";

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
