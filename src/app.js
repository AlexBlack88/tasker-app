import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routes/AppRouter";
import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig";
import { startSetTasks } from "./actions/tasksActions";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";

import "normalize.css/normalize.css";
import "./styles/style.sass";

import { firebase } from "./firebase/firebase";

const store = storeConfig();

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(App, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetTasks()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
