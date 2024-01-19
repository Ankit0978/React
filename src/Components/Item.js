// import { Component } from "react";
import React from "react";
import './Item.css';

function Item (props) {
    const itemName = props.name
return (<div className="Nirma">{itemName}
{props.children}</div>);
}

export default Item;