import React, { PureComponent } from 'react';
import { Subscriptions } from '../containers';
import DisplayListings from './Listings/DisplayListings';
import Pagination from './Utilities/Pagination';
import MoveToTop from './Utilities/MoveToTop';


class Reader extends PureComponent {
	constructor(props){
		super(props);
		this.props.initialLoadSubscriptions();
	}

	componentDidMount(){
		this.props.getListings('', '', 0);
	}

	componentDidUpdate(){
  	window.scrollTo(0, 0);
  }
  
	render() {
		const {listings, before, after, count, getListings} = this.props;
    return (
      <div>
      	<h2> Stories for today...</h2>
      	<div className="home">
	      	<div className="reader">
		      	<Pagination 
				        before={before} 
				        after={after} 
				        count={count}
				        callback={getListings}/>
		      	<DisplayListings listings={listings} />
		      	<Pagination 
				        before={before} 
				        after={after} 
				        count={count}
				        callback={getListings}/>
			    </div>
			    <Subscriptions 
		      displayManageSubscription={true} />
		      <MoveToTop scrollStepInPx="50" delayInMs="17"/>
	      </div>
      </div>

    );
  }
}

export default Reader;