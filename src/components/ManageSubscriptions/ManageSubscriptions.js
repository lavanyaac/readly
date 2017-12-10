import React, { Component } from 'react';
import { Subscriptions } from '../../containers';
import DisplaySubReddits from './DisplaySubReddits';
import Pagination from '../Utilities/Pagination';
import MoveToTop from '../Utilities/MoveToTop'
import { getSubscriptions, setSubscriptions } from '../Utilities/helpers';

class ManageSubscriptions extends Component {
	constructor(props){
		super(props);
	}

  componentDidMount(){
    this.props.getSubreddits('', '');
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

	render() {
    const { subreddits, before, after, count } = this.props
    return (
      <div className="managesubscription">
      	<div><h2>Manage Subscription</h2></div>
        <div className="managesubscription-container">
        	<DisplaySubReddits 
          subreddits={subreddits}
          handleSubscribeUnsubscribeClick={this.handleSubscribeUnsubscribe}/>
          <Pagination 
              before={before} 
              after={after} 
              count={count}
              callback={this.getSubReddits}/>
        	<Subscriptions 
          displayManageSubscription={false}
          refreshSubscriptions={false}
          updateSubRedditList={this.updateSubRedditList}/>
        </div>
        <MoveToTop scrollStepInPx="50" delayInMs="17"/>
      </div>

    );
  }
}

export default ManageSubscriptions;