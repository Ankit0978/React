import React from "react";

function Name (props) {
    const name = props.itemName;


    return (
        <div>
        <span>{name}</span>
        </div>
    );
}

export default Name;
