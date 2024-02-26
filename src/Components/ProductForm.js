import "./ProductForm.css"
import React, {useState} from "react"
function ProductForm(props){
    
    const [newTitle,setTitle] = useState("");
    const [newDate,setDate]  = useState("");
    function Change_Name_Handler(event){
        // console.log(event.target.value) 
        setTitle(event.target.value) 
        // console.log(event.target.value)
        
    }

    function Date_change_Handler(event){
        setDate(event.target.value)
        // console.log("printing")
        // console.log(title)
        // console.log(date)

    }

    function submitHandler (event) {
        event.preventDefault();

        const productData = {
            title : newTitle,
            date : newDate

             
        }
        // console.log(productData)
        props.saveProductData(productData)

        setTitle("");
        setDate("");
    }

    return (<form onSubmit={submitHandler}>
        
            <div className="new-product-title">
                <label>Title</label>
                <input type="text"  value = {newTitle} onChange={Change_Name_Handler}></input>
            </div>
            <div className="new-product-date">
                <label>Date</label>
                <input type = "date" value = {newDate} onChange= {Date_change_Handler} min="2023-01-01" max ="2023-12-12"></input>
            </div>

            <div className="new-product-button">
                <button type="submit">Add Product</button>
            </div>
    
    </form>
    )
}

export default ProductForm