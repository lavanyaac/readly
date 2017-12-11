import React from 'react';

function Subscription({subscription, updateSubscription, updateData}){
  return (
    <li className="subscriptions">
      <button onClick={()=> updateSubscription(subscription, 'unsubscribe', updateData)}>
      Unsubscribe
      </button>
      <p>{subscription}</p>
    </li>

  );
}

export default Subscription;