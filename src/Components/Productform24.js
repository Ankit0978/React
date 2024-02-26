import React ,{useState} from "react"

import "./Productform24.css"

function Productform24(){

    const [Title,setTitle] = useState("")
    const [Date,setDate] = useState("")


    function changeTitleHandler (event){
        // console.log(event.target.value)
        setTitle(event.target.value)
        console.log(event.target.value)
    }

    function changeDateHandler (event){
        setDate(event.target.value)
        console.log(event.target.value)
        
    }
    return(
        <form>
            <div className = "new-product-title">
                <label>Title</label>
                <input type ="text" onChange = {changeTitleHandler}></input>
            </div>
            <div className = "new-product-date">
                <label>Date</label>
                <input type = "date" min = "2023-01-01" max ="2023-12-12" onChange = {changeDateHandler}></input>
            </div>
            <div className = "new-product-button">
                <button type ="submit">Add Product</button>
            </div>
        
        </form>

    )

}

export default Productform24