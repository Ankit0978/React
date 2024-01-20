import React from "react";




function Item1 (props){

    const itemName = props.name;
    return(
    <div>
     <p> {itemName}</p>
    </div>
    );
}

export default Item1;