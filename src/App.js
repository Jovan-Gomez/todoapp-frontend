import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Tasks from "./components/Tasks";
import NoMatch from "./components/NoMatch";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
function App() {
  const token = useSelector((state) => state.user.token);
  const tokenStorage = localStorage.getItem("token");
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route
        path="/login"
        render={() => {
          return token || tokenStorage ? <Redirect to="tasks" /> : <Login />;
        }}
      />
      <Route path="/register" component={Register} />
      <Route
        path="/tasks"
        render={() => {
          return !tokenStorage ? <Redirect to="/login" /> : <Tasks />;
        }}
      />
      <Route
        path="/create-task"
        render={() => {
          return !tokenStorage ? <Redirect to="/login" /> : <CreateTask />;
        }}
      />
      <Route
        path="/task/edit/:id"
        exact
        render={() => {
          return !tokenStorage ? <Redirect to="/login" /> : <EditTask />;
        }}
      />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}

export default App;
