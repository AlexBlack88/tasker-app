import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import TaskDashboard from "../components/TaskDashboard";
import CreateTask from "../components/CreateTask";
import EditTask from "../components/EditTask";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={TaskDashboard} exact={true} />
        <Route path="/create" component={CreateTask} />
        <Route path="/edit/:id" component={EditTask} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default hot(module)(AppRouter);
