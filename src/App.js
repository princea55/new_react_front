import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Login from './Login'
import Signup from './Signup';
import './App.css';
import Authenticated from './Authenticated';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          {/* <Route exact path='/login' component={Login}></Route> */}
          <Route exact path='/login' component={Login} />

          <Route exact path='/signup' component={Signup} />

          <Authenticated>
            <Route exact path='/protected' component={Protected} />
          </Authenticated>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
