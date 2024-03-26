{/* <div>
    <div>
        <h1></h1>
    </div>
</div> */}

// const heading = React.createElement('h1', {id: 'heading', class: 'example'}, 'Hello World from react');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // console.log(heading);// here heading is object
// root.render(heading);
// Here ReactDOM will take the object and render this into browser understand code.

// #2nd version

// const parrent = React.createElement(
//     'div', 
//     {id: 'parrent'},
//     React.createElement(
//         'div', 
//         {id: 'parrent'},
//         React.createElement(
//             'h1', 
//             {className: 'heading'}, 
//             'Hello world from React!!'
//     )))

// #3rd version

// const parrent = React.createElement(
//     'div', 
//     {id: 'parrent'},
//     React.createElement(
//         'div', 
//         {id: 'child'},
//         [
//             React.createElement('h1', {className: 'heading'}, 'I am h1 tag from React!!'),
//             React.createElement('h2', {className: 'heading'}, 'I am h2 tag from React!!')
//         ]
//     ))

// #4th version
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parrent = React.createElement(
//     'div', 
//     {id: 'parrent'},
//     React.createElement(
//         'div', 
//         {id: 'child1'},
//         [
//             React.createElement('h1', {className: 'heading'}, 'I am h1 tag from child1!!'),
//             React.createElement('h2', {className: 'heading'}, 'I am h2 tag from child1!!')
//         ]
//     ),
//     React.createElement(
//         'div', 
//         {id: 'child2'},
//         [
//             React.createElement('h1', {className: 'heading'}, 'I am h1 tag from child2!!'),
//             React.createElement('h2', {className: 'heading'}, 'I am h2 tag from child2!!')
//         ]
//     ))

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(parrent);

    // These are from react 18

// ==Lay the foundation==
   
    // import './'

    // React JSX:
    // To avoid the React.createElement and lenghy syntax we got JSX
    // JSX is not HTML in javaScript but its looks like HTML syntax.
    // So we should always called its JSX syntax.
    // JSX is mix of HTML and JS.
    // camelCase is used in JSX


    // const jsxHeading = <h1 id = 'heading'>Hello World using JSX!!!</h1>
    // wrap in () bracket if you write JSX in multiple lines
    // const jsxHeading1 = (
    //     <h1 id = 'heading'>Hello 
    //     World using JSX!!!
    //     </h1>
    // )
    // console.log(jsxHeading);

    // React component:
    // Class based Component: -> OLD
    // Functional component: -> NEW
    // Nested component is also called composite component
    // {} inside curly brackets we can add any kind of JS
    // const something = (
    //     <span>Something added</span>
    // )
    // const Title = ()=> {
    //     return <h1 className="title">!Hello React!</h1>
    // }
    // const name = "Binod";
    // {name}
    // const HeadingComponent = () => {
        
    //     // Nested component
    //     return (
    //         <>
    //             {Title()}
    //             <Title/>
    //             <Title></Title>
    //             {name}
    //             {something}
    //             <h1>Heading with functional component!!!</h1>
    //         </>
    //     )        
    // }
    // Buiild Header:
    import logo from './logo.jpg'; // with import
    import React, { useState, useEffect } from "react";
    import ReactDOM from "react-dom/client";    
    import { restaurants } from './fakeData_2';
    
    const cardStyle = {
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        margin:10
    }
    const Header = () => {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo}
                    />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }
    const RestaurantCard = (props) => {
        const {cardData} = props;
        return (
            <>
            {
                cardData.map((item) => {
                    // console.log(item.info.cloudinaryImageId);
                    const cloudinaryImageId = item.info.cloudinaryImageId
                    return (
                        <div key={item.info.id} className='res-card' style={cardStyle}>
                             {/* <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cloudinaryImageId'  */}
                             <img src={
                                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ 
                                cloudinaryImageId 
                             }
                                alt='food-logo'
                                width='100%'
                            />
                            <h1>{item.info.name}</h1>
                            <h2>{item.info.cuisines.join(', ')}</h2>
                            <h4>{item.info.areaName}</h4>
                            <h4>{item.info.avgRating} stars</h4>
                            <h4>{item.info.costForTwo}</h4>
                            <h4>{item.info.sla.deliveryTime} minutes</h4>

                        </div>
                    )
                })
            }
            </>
        )
    }
    
    const Body = () => {
        const cardData = restaurants;
        // console.log(restaurants);
        return (
            <div className="bodyWrap">
                <div className="search">
                    <input 
                    placeholder="Search"
                    />
                </div>
                <div className="res-container">
                    <RestaurantCard cardData = {cardData}/>
                </div>
            </div>
        )
    }
    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body/>

            </div>
        )
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AppLayout/>)

    