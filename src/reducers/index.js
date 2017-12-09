import { combineReducers } from 'redux';
import Listings from './listings.js';
import Subscriptions from './subscriptions.js';
// import Dashboard from './Dashboard.js';

const appReducer = combineReducers({
  Listings,
  Subscriptions
});


const Reducer = (state, action) => {
  return appReducer(state, action);
}

export default Reducer;