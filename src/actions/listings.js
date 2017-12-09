import axios from 'axios';
import { List, Map } from 'immutable';


function gettingListings(subscriptions) {
  return {
    type: 'GETTING_LISTINGS',
    subscriptions
  }
}

function loadListings(listings) {
  return {
    type: 'LOAD_LISTINGS',
    listings
  }
}

function loadListingsAfter(after) {
  return {
    type: 'LOAD_LISTINGS_AFTER',
    after
  }
}

function loadListingsBefore(before) {
  return {
    type: 'LOAD_LISTINGS_BEFORE',
    before
  }
}

function loadListingsCount(count) {
  return {
    type: 'LOAD_LISTINGS_COUNT',
    count
  }
}

function getListingsError(error) {
  return {
    type: 'GET_LISTINGS_ERROR',
    error
  }
}

export function getListings(before, after, count, type='add', transactionType='regular', subscriptions){
	return(dispatch) => {
			let url;
			
			if(List.isList(subscriptions)){
				subscriptions = subscriptions.toJS();
			}
			const path = subscriptions.length > 0 ? subscriptions.join('+'): 'news';

			count = (transactionType === 'refresh')? 0 : count;
			if(count === 0){
				url = `https://www.reddit.com/r/${path}.json`;
			}else if(after !== ''){
				url = `https://www.reddit.com/r/${path}.json?count=${count}&after=${after}`;
			}else if(before !== ''){
				url = `https://www.reddit.com/r/${path}.json?count=${count}&before=${before}`;
			}else{
				console.log('Error with getListings params');
			}

			axios.get(url)
			.then(results => {
				const after = results.data.data.after === null? '': results.data.data.after;
	  		const before = results.data.data.before === null? '': results.data.data.before;
	  		const addCount = type === 'add' ? 25 : -25;
	  		const listings = results.data.data.children.map(listing => {
		  			const obj = {};
		  			obj.title = listing.data.title;
		  			obj.domain = listing.data.domain;
		  			obj.url = listing.data.url;
		  			obj.votes = listing.data.ups;
		  			obj.image = listing.data.thumbnail;
		  			obj.author = listing.data.author;
		  			obj.subreddit_name_prefixed = listing.data.subreddit_name_prefixed;
		  			obj.created = listing.data.created;
		  			obj.num_comments = listing.data.num_comments;
		  			obj.id = listing.data.id;
		  			return Map(obj);
	  			});

	  		dispatch(loadListings(List(listings)));
	  		dispatch(loadListingsAfter(after));
	  		dispatch(loadListingsBefore(before));
	  		dispatch(loadListingsCount(count + addCount));

			})
			.catch(error => {
				console.log(error);
				dispatch(getListingsError(error));
			});
	}
}