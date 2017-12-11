import { getListings } from './listings';
import { getSubscriptions, setSubscriptions } from '../components/Utilities/helpers';
import { List } from 'immutable';
import { updateSubscribeStatus } from './subreddits'

export function loadSubscriptions(subscriptions) {
  return {
    type: 'LOAD_SUBSCRIPTIONS',
    subscriptions
  }
}

function unsubscribe(subreddit){
  return {
    type: 'UN_SUBSCRIBE',
    subreddit
  }
}

function subscribe(subreddit){
  return {
    type: 'SUBSCRIBE',
    subreddit
  }
}

export function initialLoadSubscriptions(){
  return(dispatch) => {
    const subscriptions = getSubscriptions() || [];
    dispatch(loadSubscriptions(List(subscriptions)));
  }
}
function updateSubscriptionList(dispatch, getState,subreddit, subscribeUnsubscribe){
  if(subscribeUnsubscribe === 'subscribe'){
    dispatch(subscribe(subreddit));
  }else if(subscribeUnsubscribe === 'unsubscribe'){
    dispatch(unsubscribe(subreddit));
  }
  const subscriptions = getState().Subscriptions.get('subscriptions').toJS();
  setSubscriptions(subscriptions);
}
export function updateSubscription(subreddit, subscribeUnsubscribe, updateData) {
  return(dispatch, getState)=>{
      updateSubscriptionList(dispatch, getState, subreddit, subscribeUnsubscribe)
      debugger;
      if(updateData === 'listings'){
        const subscriptions = getState().Subscriptions.get('subscriptions').toJS();
        dispatch(getListings('', '', 0, 'add', 'regular', subscriptions));
      }
      if(updateData === 'subreddits'){
        dispatch(updateSubscribeStatus(subreddit, subscribeUnsubscribe));
      }
  }
    
    
}


