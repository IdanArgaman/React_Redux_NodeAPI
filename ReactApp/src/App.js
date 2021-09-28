import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';

const asyncEmployees = asyncComponent(() => {
  return import('./containers/Employees/Employees');
});

class App extends Component {

  render () {
    let routes = (
        <Switch>
          <Route path="/" exact component={asyncEmployees} />
          <Redirect to="/" />
        </Switch>
      );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
