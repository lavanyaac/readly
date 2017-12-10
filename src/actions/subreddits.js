import axios from 'axios';
import { List, Map } from 'immutable';
import {updateSubscription} from './subscriptions';


function gettingSubreddits(message) {
  return {
    type: 'GETTING_SUBREDDITS',
    message
  }
}

function loadSubreddits(subreddits) {
  return {
    type: 'LOAD_SUBREDDITS',
    subreddits
  }
}

function loadSubredditsAfter(after) {
  return {
    type: 'LOAD_SUBREDDITS_AFTER',
    after
  }
}

function loadSubredditsBefore(before) {
  return {
    type: 'LOAD_SUBREDDITS_BEFORE',
    before
  }
}

function loadSubredditsCount(count) {
  return {
    type: 'LOAD_SUBREDDITS_COUNT',
    count
  }
}

function getSubredditsError(error) {
  return {
    type: 'GET_SUBREDDITS_ERROR',
    error
  }
}

function updateSubreddits(e, subreddit){
  return {
    type: 'HANDLE_SUBSCRIBE_UNSUBSCRIBE',
    e, 
    subreddit
  }
}

export function updateSubscribeStatus(subreddit){
  return{
    type: 'UPDATE_SUBSCRIPTION_STATUS',
    subreddit
  }
}

export function handleSubscribeUnsubscribe(e, subreddit){
  const status = e.target.className === 'Unsubscribe' ? 'unsubscribe': 'subscribe';
  return(dispatch) => {
    dispatch(updateSubreddits(e, subreddit));
    dispatch(updateSubscription(subreddit, status));
  }
}

export function getSubreddits(before, after, count, type='add'){
	return(dispatch, getState) => {
    dispatch(gettingSubreddits('Getting Subreddits'));
		let url;
    if(!count) count = 0;
    if(count === 0){
      url = `https://www.reddit.com/subreddits.json`;
    }else if(after !== ''){
      url = `https://www.reddit.com/subreddits.json?count=${this.state.count}&after=${after}`;
    }else if(before !== ''){
      url = `https://www.reddit.com/subreddits.json?count=${this.state.count}&before=${before}`;
    }else{
      console.log('Error with subreddits request');
    }
    axios.get(url)
    .then(results => {
      const user_subscribed = getState().Subscriptions.get('subscriptions').toJS();
      const after = results.data.data.after === null? '': results.data.data.after;
      const before = results.data.data.before === null? '': results.data.data.before;
      const addCount = type === 'add' ? 25 : -25;
      const subreddits = results.data.data.children.map(subreddit => {
        const obj ={};
        obj['id'] = subreddit.data.id;
        obj['user_name_prefixed'] = subreddit.data.display_name;
        obj['display_name'] = subreddit.data.display_name;
        obj['title'] = subreddit.data.title;
        obj['subscribers'] = subreddit.data.subscribers;
        obj['url'] = subreddit.data.url;
        obj['created'] = subreddit.data.created;
        obj['public_description'] = subreddit.data.public_description;
        obj['user_subscribed'] = user_subscribed.some((subscription)=>{
          return subscription === subreddit.data.display_name;
        })
        return Map(obj);
      });
      dispatch(loadSubreddits(List(subreddits)));
  		dispatch(loadSubredditsAfter(after));
  		dispatch(loadSubredditsBefore(before));
  		dispatch(loadSubredditsCount(count + addCount));
    })
    .catch(error => {
      dispatch(getSubredditsError(error));
    })
  }
}