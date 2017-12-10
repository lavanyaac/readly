import { connect } from 'react-redux';
import Reader from './components/Reader';
import DisplaySubscriptions from './components/Subscriptions/DisplaySubscriptions';
import ManageSubscriptions from './components/ManageSubscriptions/ManageSubscriptions';
import { getListings } from './actions/listings';
import { loadSubscriptions, unSubscribe } from './actions/subscriptions';
import { getSubreddits } from './actions/subreddits';


export const Readers = connect(
	function mapStateToProps(state){
		return{
			listings: state.Listings.get('listings'),
			after: state.Listings.get('after'),
			before: state.Listings.get('before'),
			count: state.Listings.get('count')
		}
	},

	function mapDispatchToProps(dispatch){
		return{
			getListings: (subscriptions, count, before, after, type, transactionType) => {
				dispatch(getListings(subscriptions, count, before, after, type, transactionType));
			}
		}
	}
)(Reader);

export const Subscriptions = connect(
	function mapStateToProps(state){
		console.log('container', state)
		return{
			subscriptions: state.Subscriptions.get('subscriptions')
		}
	},

	function mapDispatchToProps(dispatch){
		return{
			loadSubscriptions: (subscriptions) => {
				dispatch(loadSubscriptions(subscriptions));
			},
			unSubscribe: (subreddit) => {
				dispatch(unSubscribe(subreddit));
			}
		}
	}
)(DisplaySubscriptions);

export const ManageSubscription = connect(
	function mapStateToProps(state){
		return{
			subreddits: state.SubReddits.get('subreddits'),
			after: state.SubReddits.get('after'),
			before: state.SubReddits.get('before'),
			count: state.SubReddits.get('count')
		}
	},

	function mapDispatchToProps(dispatch){
		return{
			getSubreddits: (before, after, count, type) => {
				dispatch(getSubreddits(before, after, count, type));
			}
		}
	}
)(ManageSubscriptions);