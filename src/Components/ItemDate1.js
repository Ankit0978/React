import React from "react";
import "./ItemDate1.css";
function Itemdate1 (props) {
        const day = props.day;
        const month = props.month;
        const year = props.year;
    return (

        
        <div classname = "mfgdate">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )

}

export default Itemdate1;