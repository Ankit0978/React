import React from "react";

import ProductItem from "./ProductItem";

import Card from "./Card";

// import './Products.css'

const Products = (props) => {
   
    console.log("====props",props);
    return(
        <Card classname = "products">

            <ProductItem
            title = {props.item[0].title}
            amount = {props.item[0].amount}
            date = {props.item[0].date}
            // {...props}
            />
            {/* { <ProductItem
            title = {props.items[1].title}
            amount = {props.item[1].amount}
            date = {props.item[1].date}
            />},  */}
            {/* <ProductItem */}
            {/* title = {props.items[2].title}
            amount = {props.item[2].amount}
            date = {props.item[2].date}
            />
            <ProductItem
            title = {props.items[3].title}
            amount = {props.item[3].amount}
            date = {props.item[3].date}
            /> */} 

        </Card>
    )
}

export default Products;