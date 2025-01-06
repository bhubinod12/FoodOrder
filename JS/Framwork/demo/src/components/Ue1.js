import React, { useState, useEffect } from 'react'

function Ue1() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleText = (e) => {
        setText(e.target.value);
    }
    useEffect(function() {
        console.log("useEffect");
        document.title = `Button Clicked ${count} times`;
        console.log("UseEffect runs only once", {count});
    }, [count]);
    // return (count) => {
    //     console.log("Unmounting");
    // }
// );
console.log("render");
  return (
    <div>
        <h1>This is my count value: {count}</h1>
        <input onChange={handleText} type='text' value={text}/>
        <h3>{text}</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Ue1