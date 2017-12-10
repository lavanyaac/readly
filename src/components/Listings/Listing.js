import React from 'react';
const moment = require('moment');

function Listing({listing}) {
  const defaultImageSrc = "assets/images/thumbnail-default.jpg";
  const imgSrc = ['default', 'self', 'nsfw', '', 'image'].includes(listing.get('image'))? 
  defaultImageSrc : listing.get('image');
  const time = moment(parseFloat(listing.get('created'))*1000).fromNow();
  return (
    <li className="listing-container">
      <div className="votes"><p>{listing.get('votes')} Votes</p></div>
      <div className="listing-image"><img src={imgSrc} alt="" /></div>
      <div className="listing-info">
        <a href={listing.get('url')} >{listing.get('title')}</a>
        <p className="domain-name">{listing.get('domain')}</p>
        <p className="additional-info">Submitted <span>{time}</span> by <span>{listing.get('author')}</span> to <span>{listing.get('subreddit_name_prefixed')}</span></p>
        <p className="additional-info">{listing.get('num_comments')} comments</p>
      </div>
    </li>

  );
}

export default Listing;