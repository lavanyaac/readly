import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import Home from './components/Home';

const store = Store();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Home/>
      </Provider>
    );
  }
}
export default App;
