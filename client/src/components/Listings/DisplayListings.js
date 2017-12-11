import React from 'react';
import Listing from './Listing';

function DisplayListings({listings}){
  return (
    listings.length === 0 ? null:
    <ul className="listings-container">
      {listings.map((listing, i) => (
        <Listing listing={listing} key={listing.get('id')} index={i}/>
        ))}
    </ul>

  );
}

export default DisplayListings;