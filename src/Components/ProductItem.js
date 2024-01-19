import React,{useState} from 'react';

// import ProductDate from "./ProductDate";

import Card from "./Card";

// import "./ProductItem.css"

const ProductItem = (props) => {

    // H.w.1 - Ye const likhne ke baad bhi kaise chal rha he
    const[title,setTitle] = useState(props.title);

    // let title = props.title;

console.log("====",props);
    function clickHandler(){
        // title = "Popcorn"
        setTitle("Popcorn");
     // H.w.2 - Ye settitle wala function instantly chalta he ya phir use time lagta he
        console.log("Button Clicked");
    }

    return(
    <Card className = "product-item">
        {/* <ProductDate date = {props.date}/> */}
        <div className="product-item-description">
            <h2>{title}</h2>
            <button onClick={clickHandler}>Add To Cart</button>
        </div>
    </Card>
    );
}

export default ProductItem;