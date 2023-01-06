import React from 'react'

function Box({index , displayValue}) {
  return (
    <div className='box' onClick={displayValue}>{index}</div>
  )
}

export default Box;