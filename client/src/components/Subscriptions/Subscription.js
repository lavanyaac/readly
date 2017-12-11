import React from 'react';

function Subscription({subscription, handleUnsubscribeClick}){
  return (
    <li className="subscriptions">
      <button onClick={()=> handleUnsubscribeClick(subscription)}>
      Unsubscribe
      </button>
      <p>{subscription}</p>
    </li>

  );
}

export default Subscription;