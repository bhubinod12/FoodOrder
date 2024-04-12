import React from "react";
import { useRouteError } from "react-router-dom";
const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2 style={{fontWeight:'bold'}}>Opps!!!!</h2> 
            <h3>Something went wrong!!!</h3>
            <h4>{error.data} + {error.statusText}</h4>
        </div>
    )
}
export default NotFound;