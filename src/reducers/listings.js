import { List, Map } from 'immutable';

const initialState = Map({
	listings: List([]),
	before: '',
	after: '',
	count: 0,
	gettingListings: false,
	getListingDataError: ''
});

const Listings = (state = initialState, action) => {
	switch(action.type){
		case 'GETTING_LISTINGS':
			return state.update('gettingListings', () => true);
		case 'LOAD_LISTINGS':
			return state.set('listings', action.listings);
		case 'LOAD_AFTER':
			return state.set('after', action.after);
		case 'LOAD_BEFORE':
			return state.set('before', action.before);
		case 'LOAD_COUNT':
			return state.set('count', action.count); 
		case 'GET_LISTINGS_ERROR':
			return state.merge({
				'gettingListings':false, 
				'getListingDataError': action.error
			});

		default:
			return state;
	}
};

export default Listings;

