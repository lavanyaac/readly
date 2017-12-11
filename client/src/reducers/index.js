import { combineReducers } from 'redux';
import Listings from './listings.js';
import Subscriptions from './subscriptions.js';
import SubReddits from './subreddit.js';

const appReducer = combineReducers({
  Listings,
  Subscriptions,
  SubReddits
});


const Reducer = (state, action) => {
  return appReducer(state, action);
}

export default Reducer;