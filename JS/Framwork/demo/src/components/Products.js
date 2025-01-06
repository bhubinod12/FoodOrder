import React from 'react'

function Products() {
    let productsList = [
        { id: 1, name: 'Laptop', price: 1000}, 
        { id: 2, name: 'Mobile', price: 500}, 
        { id: 3, name: 'Tablet', price: 300}, 
        { id: 4, name: 'Camera', price: 700}
    ];

    
    
  return (
    // <div>
    //     <h1>Products</h1>
    //     <ul>
    //         {
    //             products.map(function(item, index){
    //                 return <li key={index} onClick={handleClick}>{item}</li>
    //             })
    //         }
    //     </ul>
    // </div>
    <div>
        {
            productsList.map(function(item){
                return (<li key = {item.id}>{item.name}</li>)
            })
        }
    </div>
  )
}

export default Products