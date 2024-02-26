import React from "react";


function Item25 (props) {
    const id = props.id;
    // const title = props.title;
    const amount = props.amount;

    const title = props.title


    return (
        <div className = "style1">
            <p>{id}</p>
            <p>{title}</p>
            <p>{amount}</p>
            {props.children}
        </div>
    );

}

export default Item25;