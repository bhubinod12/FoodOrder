import React from 'react'

function UserProfile(props) {
    const {name, age, occupation} = props // Destructuring props
    console.log(props);
  return (
    <div>
        {/* <h3>Name: {props.name}  {props.age} {props.occupation}</h3> */}
        <h3>Name: {name}  {age} {occupation}</h3>
    </div>
  )
}

export default UserProfile

/**
 * props is an object that holds the values of the attributes
 * of the component and it is passed to the component by the parent component.
 * Also, props are immutable, which means that once they are passed from the parent component, 
 * they cannot be changed.
 */

/**
 * Functional components are the simplest form of a react component. 
 * and its just a plain javascript function that returns a react element.
 * Also, functional components are also known as stateless components. 
 * but class components are known as stateful components.
 */

/**
 * VOM - Virtual Object Model
 * React uses a virtual DOM to render the UI.
 * The virtual DOM is a lightweight copy of the actual DOM.
 * When the state of an object changes, the virtual DOM is updated instead of the actual DOM.
 * React then compares the virtual DOM with the actual DOM and updates only the parts of the actual DOM that have changed.
 * This makes the rendering process faster.
 * 
 * React uses a diffing algorithm to compare the virtual DOM with the actual DOM.
 * The diffing algorithm finds the minimum number of steps to update the actual DOM.
 * This makes the rendering process efficient.
 * 
 * React uses a reconciliation process to update the actual DOM.
 * The reconciliation process updates the actual DOM with the changes in the virtual DOM.
 * The reconciliation process is fast and efficient.
 * 
 */