import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig";

import "normalize.css/normalize.css";
import "./styles/style.sass";

const store = storeConfig();

const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
