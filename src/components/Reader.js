import React, { Component } from 'react';
import { Subscriptions } from '../containers';
import DisplayListings from './Listings/DisplayListings';
import Pagination from './Utilities/Pagination';
import MoveToTop from './Utilities/MoveToTop';
import { getSubscriptions } from './Utilities/helpers';


class Home extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.getData('', '', 0);
	}

	componentDidUpdate(){
  	window.scrollTo(0, 0);
  }

	getData(before, after, count, type, transactionType){
		const subscriptions = getSubscriptions();
		// this.setState({subscriptions});
		this.props.getListings(before, after, count, type, transactionType, subscriptions);
	}

	refreshListings(){
		this.getData();
	}
	render() {
		const {listings, before, after, count} = this.props;
    return (
      <div>
      	<h2> Stories for today...</h2>
      	<div className="home">
	      	<div className="reader">
		      	<Pagination 
				        before={before} 
				        after={after} 
				        count={count}
				        callback={this.getData}/>
		      	<DisplayListings listings={listings} />
		      	<Pagination 
				        before={before} 
				        after={after} 
				        count={count}
				        callback={this.getData}/>
			    </div>
			    <Subscriptions 
		      displayManageSubscription={true}
		      refreshListings={this.refreshListings}/>
		      <MoveToTop scrollStepInPx="50" delayInMs="17"/>
	      </div>
      </div>

    );
  }
}

export default Home;