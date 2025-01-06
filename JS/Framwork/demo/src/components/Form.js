import React from 'react';
import { useState } from 'react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleFirstName = (e) => {
        // console.log(e);
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleSubmit = (e) => {
        let obj = {}
        e.preventDefault();
        // console.log(`${firstName} ${lastName}`);
        obj.firstName = firstName;
        obj.lastName = lastName;
        console.log(obj); // we can send the object to the server
    }
  return (
    <div>
        <h1>THis is a form!!!</h1>
        <form>
            <label>FirstName <br/></label>
            <input onChange={handleFirstName} aria-label = 'FirstName' type='text' value = {firstName}/>
            <br/>
            <label>LastName <br/></label>
            <input onChange= {handleLastName} type='text' aria-label='lastName' value={lastName}/>
            <br/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Form