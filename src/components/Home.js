import React, { PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Readers, ManageSubscription } from '../containers'

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.props.initialLoadSubscriptions();

    this.homeHandler = this.homeHandler.bind(this);
  }

  homeHandler(){
    window.location.href='/';
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" onClick={this.homeHandler}>Reddit Reader</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route name="reader" exact path="/" component={() => (<Readers />)}/>
            <Route name="managesubscriptions" path="/managesubscriptions" component={() => (<ManageSubscription />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;

