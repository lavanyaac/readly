import React from 'react';
const moment = require('moment');

function SubReddit({subreddit, handleSubscribeUnsubscribe}) {
  const subscriptionStatus = subreddit.get('user_subscribed') ? 'Unsubscribe' : 'Subscribe';
  const time = moment(parseFloat(subreddit.get('created'))*1000).fromNow();
  return (
    <li className="subreddit-container">
      <button 
        className={ subscriptionStatus }
        onClick = {(e) => handleSubscribeUnsubscribe(e, subreddit.get('display_name'))}>
        {subscriptionStatus}
      </button>
      <div className='subreddit-info'>
        <div className='subreddit-title-info'>
          <p>{subreddit.get('display_name')}:&nbsp;</p>
          <p>{ ' '+subreddit.get('title')}</p>
        </div>
        <p>{subreddit.get('public_description')}</p>
        <div className='subreddit-subs-info'>
          <p>{subreddit.get('subscribers')} subscribers, </p>
          <p>&nbsp;a community for {time}</p>
        </div>
      </div>

    </li>

  );
}

export default SubReddit;