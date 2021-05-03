import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LogIn } from "@src/common/login/test";
import TabComponent from "@src/common/tab";
export default class RouteNav extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={LogIn} />
            <Route path="/" component={TabComponent} />
            <Redirect to="#/home" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}