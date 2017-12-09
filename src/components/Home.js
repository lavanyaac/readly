import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Readers } from '../containers'
import ManageSubscriptions from './ManageSubscriptions/ManageSubscriptions';

class App extends Component {
  homeHandler(){
    window.location.href='/';
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" onClick={this.homeHandler.bind(this)}>Reddit Reader</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route name="reader" exact path="/" component={() => (<Readers />)}/>
            <Route name="managesubscriptions" path="/managesubscriptions" component={() => (<ManageSubscriptions />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
