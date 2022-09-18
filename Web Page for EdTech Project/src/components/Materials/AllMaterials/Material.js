import React from "react";
import './Material.css'

let n=0;
const Material = (props) => {
    let classes = "";
    if(props.className){
        classes = "activeAssignment"
    }
    return (
        <div className={`Assignment ${classes}`}>
            <div className="AssignmentTitle">
                <h2>{`Assignment ${n}`}</h2>
            </div>
            <div className="Status">
                <div>{`Due Today`}</div>
            </div>
        </div>
    )
}
export default Material;