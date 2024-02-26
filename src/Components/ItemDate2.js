import "./ItemDate2.css"

import React, {useState} from "react"

function ItemDate2 (props) {

    const [month,setMonth] = useState(props.month)
    const [day,setDay] = useState(props.day)
    const [year,setYear]= useState(props.year)

    function clickHandler(){
        setMonth("We are good to move forward")
        setDay("First")
        setYear("Now")


        // const month = "All is well"
        console.log("Button is clicked")
    }
    

    
    // const month = props.month
    // const day = props.day
    // const year = props.year

    return (<div className="Date">
        <span>{day}</span>
        <span>{month}</span>

        <span>{year}</span>
        <button onClick= {clickHandler}>Submit</button>

    </div>
      
    )
}






export default ItemDate2;