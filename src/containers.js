import { connect } from 'react-redux';
import Reader from './components/Reader';
import DisplaySubscriptions from './components/Subscriptions/DisplaySubscriptions';
import { getListings } from './actions/listings';
import { loadSubscriptions, unSubscribe } from './actions/subscriptions';


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