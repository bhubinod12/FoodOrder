import React from 'react'

function Events() {
    const handleClick = () => {
        console.log('Button clicked');
        // alert('Button clicked');
    }
  return (
    <div>
        <h1>Event handling</h1>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default Events