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

const parrent = React.createElement(
    'div', 
    {id: 'parrent'},
    React.createElement(
        'div', 
        {id: 'child1'},
        [
            React.createElement('h1', {className: 'heading'}, 'I am h1 tag from child1!!'),
            React.createElement('h2', {className: 'heading'}, 'I am h2 tag from child1!!')
        ]
    ),
    React.createElement(
        'div', 
        {id: 'child2'},
        [
            React.createElement('h1', {className: 'heading'}, 'I am h1 tag from child2!!'),
            React.createElement('h2', {className: 'heading'}, 'I am h2 tag from child2!!')
        ]
    ))

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parrent);

    // These are from react 18