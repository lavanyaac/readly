import React, { Component } from 'react';
import Subscription from './Subscription';
import { withRouter } from 'react-router-dom';
import { getSubscriptions, setSubscriptions } from '../Utilities/helpers';


class DisplaySubscriptions extends Component {
  constructor(props){
    super(props);
    
    this.handleManageSubscriptionsClick = this.handleManageSubscriptionsClick.bind(this);
  }

  componentDidMount(){
    const subscriptions = getSubscriptions();
    this.props.loadSubscriptions(subscriptions);
  }

  handleManageSubscriptionsClick(){
    this.props.history.push('/managesubscriptions');
  }

  render() {
    const { subscriptions, displayManageSubscription, unSubscribe } = this.props;
    
    const manageSubscription = displayManageSubscription ? 
    <div className="manageSubscription">
      <button onClick={this.handleManageSubscriptionsClick}>Manage Subscriptions</button>
    </div> :
    null;

    const subscriptionsList = subscriptions.size === 0 ?
        <div>
          <p>Click on the Manage Subscription button to subscribe to a subreddit</p>
        </div>
       :<ul>
          {
            subscriptions.map((subscription, i) => (
              <Subscription 
              subscription={subscription} 
              key={i} 
              subscriptionIndex={i}
              handleUnsubscribeClick={unSubscribe}/>
            ))
          }
        </ul>
    return (
      <aside className="subscriptions-container">
        <h3>My Subscriptions</h3>
        { subscriptionsList }
        { manageSubscription }
      </aside>

    );
  }
}

export default withRouter(DisplaySubscriptions);