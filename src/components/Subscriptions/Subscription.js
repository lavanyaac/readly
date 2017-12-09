import React, { Component } from 'react';

class Subscription extends Component {
	render() {
		const {subscription, subscriptionIndex, handleUnsubscribeClick} = this.props;
    return (
      <li className="subscriptions">
        <button onClick={()=> handleUnsubscribeClick(subscription)}>
      	Unsubscribe
      	</button>
      	<p>{subscription}</p>
      </li>

    );
  }
}

export default Subscription;