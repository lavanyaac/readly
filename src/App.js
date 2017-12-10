import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import HomePage from './containers';

const store = Store();

function App() {
  return (
    <Provider store = { store }>
      <HomePage/>
    </Provider>
  );
}
export default App;