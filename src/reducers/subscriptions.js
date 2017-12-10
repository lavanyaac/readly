import { List, Map } from 'immutable';

const initialState = Map({
	subscriptions: List([])
});

const Subscriptions = (state = initialState, action) => {
	switch(action.type){
		case 'LOAD_SUBSCRIPTIONS':
			return state.set('subscriptions', List(action.subscriptions));
		case 'UN_SUBSCRIBE':{
			let subscriptions = state.get('subscriptions');
			const index = subscriptions.indexOf(action.subreddit);
			return state.set('subscriptions',subscriptions.delete(index));
		}
		case 'SUBSCRIBE':
			let subscriptions = state.get('subscriptions');
			return state.set('subscriptions',subscriptions.push(action.subreddit));
		case 'LOAD_SUBSCRIPTIONS_ERROR':
			return state;
		default:
			return state;
	}
};

export default Subscriptions;