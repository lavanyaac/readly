import { connect } from 'react-redux';
import Reader from './components/Reader';
import Home from './components/Home';
import DisplaySubscriptions from './components/Subscriptions/DisplaySubscriptions';
import ManageSubscriptions from './components/ManageSubscriptions/ManageSubscriptions';
import { getListings } from './actions/listings';
import { loadSubscriptions, updateSubscription, initialLoadSubscriptions } from './actions/subscriptions';
import { getSubreddits, handleSubscribeUnsubscribe } from './actions/subreddits';

export const HomePage = connect(
	function mapStateToProps(state){
		return{	}
	},

	function mapDispatchToProps(dispatch){
		return{
			initialLoadSubscriptions: () => {
				dispatch(initialLoadSubscriptions());
			}
		}
	}
)(Home);


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
		return{
			subscriptions: state.Subscriptions.get('subscriptions')
		}
	},

	function mapDispatchToProps(dispatch){
		return{
			loadSubscriptions: (subscriptions) => {
				dispatch(loadSubscriptions(subscriptions));
			},
			updateSubscription: (subreddit, subscribeUnsubscribe, updateData) => {
				dispatch(updateSubscription(subreddit, subscribeUnsubscribe, updateData));
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
			},

			handleSubscribeUnsubscribe: (e, subreddit) => {
				dispatch(handleSubscribeUnsubscribe(e, subreddit));
			}
		}
	}
)(ManageSubscriptions);