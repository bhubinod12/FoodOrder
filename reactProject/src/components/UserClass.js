import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: 'Dummy name',
                address: 'Dummy location'
            }
        };
        // console.log("childeren Constructor is called!!!");
    }
    // First constructor->render->componentDidMount will get called so first compoent will get render then API will get called in componentDidMount() method:
   async componentDidMount() {
        // API will get called here:
        // console.log("child componentDidMount!!!!");
        // https://jsonplaceholder.typicode.com/users
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const resData = await data.json();
        // console.log(resData);
        // debugger
        this.setState({
            userInfo: resData,
        })
    }
    componentDidUpdate() {
        console.log("componentDidUpdate() is called!!!");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount() is called!!!");
    }
    
    render () {
        const {name, location} = this.props;
        const {count, count2, userInfo} = this.state;
        
        console.log(userInfo[0]);
        // console.log("childrent Component render is called!!!");
        return userInfo[0] == null ? (<h1>User info not found!!!</h1>) : (
            <div className="user-card">
                {/* <h1>Count: {count} Count2: {count2}</h1> */}
                {/* <button onClick={() => {
                    // Never update state variables directly into the class base component:
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }}>Count Increase</button> */}
                <h2>Name: {userInfo[0].name}</h2>
                <h3>Location: {userInfo[0].address.city}</h3>
                <h4>Contact: @bhubinod12</h4>
            </div>
        )
    }
}

export default UserClass

// First mount will get called then unmount will happen for other component