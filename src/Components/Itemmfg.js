import React from "react";

import "./Itemmfg.css";


function Itemmfg(props) {
    const date = props.itemDate;
    const month = props.itemMonth;
    const year = props.itemYear;

    return(
        <div className="stlyes">
            <span>{date}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}

export default Itemmfg;