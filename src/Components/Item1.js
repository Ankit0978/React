import React from "react";




function Item1 (props){

    const itemName = props.name;
    return(
    <div>
    {/* {props.children} */}
     <p> {itemName}</p>
     {props.children}

    </div>
    );
}

export default Item1;