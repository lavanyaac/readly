import { List, Map } from 'immutable';

const initialState = Map({
	subreddits: List([]),
	before: '',
	after: '',
	count: 0,
	gettingSubreddits: false,
	getSubredditsDataError: ''
});

const SubReddits = (state = initialState, action) => {
	switch(action.type){
		case 'GETTING_SUBREDDITS':
			return state.update('gettingSubreddits', () => true);
		case 'LOAD_SUBREDDITS':
			return state.set('subreddits', action.subreddits);
		case 'LOAD_SUBREDDITS_AFTER':
			return state.set('after', action.after);
		case 'LOAD_SUBREDDITS_BEFORE':
			return state.set('before', action.before);
		case 'LOAD_SUBREDDITS_COUNT':
			return state.set('count', action.count); 
		case 'GET_SUBREDDITS_ERROR':
			return state.merge({
				'gettingSubreddits':false, 
				'getSubredditsDataError': action.error
			});
		case 'HANDLE_SUBSCRIBE_UNSUBSCRIBE':{
			const isSubscribed = action.e.target.className === 'Unsubscribe' ? false: true;
			let subreddits = state.get('subreddits');
			const index = subreddits.indexOf(action.subreddit);
			return state.set('subreddits',subreddits.update(index, subreddit => subreddit.set('user_subscribed', isSubscribed)));

		} 
		default:
			return state;
	}
};

export default SubReddits;

