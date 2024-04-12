import React from 'react'
import User from './User'
import UserClass from './UserClass'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parrent Constructor")
  }
  componentDidMount() {
    // This is used to do API call:
    // console.log("parrent componentDidMount!!!!");
    
}
  render() {
    // console.log("parrent render")
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Us Page</h2>
        {/* <User name = {"Binod Kumar (function)"}/> */}
        <UserClass name = {"Binod Kumar (Class)"} location = {"Bangalore (Class)"} />
      </div>
    )
  }
}

// Below is functional component:
// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is About Us Page</h2>
//       {/* <User name = {"Binod Kumar (function)"}/> */}
//       <UserClass name = {"Binod Kumar (Class)"} location = {"Bangalore (Class)"} />
//     </div>
//   )
// }

export default AboutUs