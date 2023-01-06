import React from 'react'

import './App.css';
function Box({index , displayValue , name}) {
  return (
    <div className="box" id={ `${name}` }onClick={displayValue}>{index}</div>
  )
}

export default Box;