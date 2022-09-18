import React from "react";
import './Course.css'
let m=2

const Course = (props) => {
    let classes = "";
    if(props.className){
        classes = "activeCourse"
    }
    return (
        <div className={`Course ${classes}`}>
            <div className="CourseTitle">
                <h2>{props.name}</h2>
            </div>
            <div className="Modules">
                <div>{`${props.moduleNumber} Modules`}</div>
            </div>
        </div>
    )
}

export default Course;