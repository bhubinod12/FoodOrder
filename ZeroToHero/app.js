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

import ReactDOM from "react-dom/client";    
import { restaurants } from './src/util/fakeData_2';
import Header from './src/components/Header';
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Card from "./src/components/Card";
import NotFound from "./src/components/NotFound";
import RestaurantMenu from "./src/components/RestaurantMenu";
    
    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                {/* <Body/> */}
                <Outlet/>
            </div>
        )
    }
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path: '/',
                    element: <Body/>
                },
                {
                    path: "/about",
                    element: <AboutUs/>
                },
                {
                    path: "/contact-us",
                    element: <ContactUs/>
                },
                {
                    path: "/card",
                    element: <Card/>
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu/>
                }
            ],
            errorElement: <NotFound/>
            
        },
    ])
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router={appRouter}/>)

    