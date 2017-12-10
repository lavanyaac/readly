import React from 'react';
import SubReddit from './SubReddit';

function DisplaySubReddits({subreddits, handleSubscribeUnsubscribe}) {
  return (
  	subreddits.length === 0? null:
    <ul className="subreddits-container">
    	{
    		subreddits.map((subreddit, i) => (
    			<SubReddit 
          subreddit={subreddit} 
          key={subreddit.get('id')} 
          subredditIndex={i}
          handleSubscribeUnsubscribe={handleSubscribeUnsubscribe}/>))
    	}
    </ul>

  );
}

export default DisplaySubReddits;