import { getListings } from './listings';

export function loadSubscriptions(subscriptions) {
  return {
    type: 'LOAD_SUBSCRIPTIONS',
    subscriptions
  }
}

function removeFromSubscriptionList(subreddit){
	return {
    type: 'UN_SUBSCRIBE',
    subreddit
  }
}

export function unSubscribe(subreddit, subscriptions) {
  return(dispatch, getState) => {
  	dispatch(removeFromSubscriptionList(subreddit));
  	const subscriptions = getState().Subscriptions.get('subscriptions');
  	dispatch(getListings('', '', 0, 'add', 'regular', subscriptions));
  }
}


