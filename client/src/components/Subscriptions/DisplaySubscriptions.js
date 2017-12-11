import React from 'react';
import Subscription from './Subscription';
import { withRouter } from 'react-router-dom';

function handleManageSubscriptionsClick(history){
  history.push('/managesubscriptions');
}

function DisplaySubscriptions({subscriptions, displayManageSubscription, updateSubscription, history}) {
  const updateData = displayManageSubscription ? 'listings' : 'subreddits';
    
  const manageSubscription = displayManageSubscription ? 
  <div className="manageSubscription">
    <button onClick={()=>handleManageSubscriptionsClick(history)}>Manage Subscriptions</button>
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
            updateSubscription={updateSubscription}
            updateData={updateData}/>
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

export default withRouter(DisplaySubscriptions);