import React from 'react';

function Pagination({before, after, count, callback}) {
  return (
    <div className="pagination">
      <button 
      className={ "prevbtn pgbtn "+ (count > 26 ? "" : "inactive")}
      onClick={() => {callback(before, '', 'sub')}}>
      Prev</button>
      <button 
      className={ "nextbtn pgbtn "+ (after ? "" : "inactive")}
      onClick={() => {callback('', after)}}>
      Next</button>
    </div>
  );
}

export default Pagination;
