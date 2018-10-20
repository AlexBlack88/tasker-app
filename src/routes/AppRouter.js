import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import createHistory from "history/createBrowserHistory";
import TaskDashboard from "../components/TaskDashboard";
import CreateTask from "../components/CreateTask";
import EditTask from "../components/EditTask";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={TaskDashboard} />
        <PrivateRoute path="/create" component={CreateTask} />
        <PrivateRoute path="/edit/:id" component={EditTask} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(AppRouter);
