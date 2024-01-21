import React from "react";


function Item25 (props) {
    const id = props.id;
    const title = props.title;
    const amount = props.amount;


    return (
        <div className = "style1">
            <p>{id}</p>
            <p>{title}</p>
            <p>{amount}</p>
        </div>
    );

}

export default Item25;