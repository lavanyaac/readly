import React, { Component } from 'react';
import { Subscriptions } from '../../containers';
import DisplaySubReddits from './DisplaySubReddits';
import Pagination from '../Utilities/Pagination';
import MoveToTop from '../Utilities/MoveToTop'

class ManageSubscriptions extends Component {

  componentDidMount(){
    this.props.getSubreddits('', '');
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

	render() {
    const { subreddits, before, after, count, handleSubscribeUnsubscribe, getSubreddits } = this.props
    return (
      <div className="managesubscription">
      	<div><h2>Manage Subscription</h2></div>
        <div className="managesubscription-container">
        	<DisplaySubReddits 
          subreddits={subreddits}
          handleSubscribeUnsubscribe={handleSubscribeUnsubscribe}/>
          <Pagination 
              before={before} 
              after={after} 
              count={count}
              callback={getSubreddits}/>
        	<Subscriptions 
          displayManageSubscription={false}/>
        </div>
        <MoveToTop scrollStepInPx="50" delayInMs="17"/>
      </div>

    );
  }
}

export default ManageSubscriptions;