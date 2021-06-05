import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import One from './One';
import Two from './Two';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={One} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
