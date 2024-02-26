import "./Item24.css"

function Item24 (props) {

    const itemname = props.name
    return(
        <div>
             <p className="nirma"> {itemname}</p>
        {props.children}
        </div>
        )
}

export default Item24;