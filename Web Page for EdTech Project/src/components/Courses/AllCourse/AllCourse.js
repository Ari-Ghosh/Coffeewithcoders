import React from "react";
import Card from "../../UI/Card";
import './AllCourse.css'
import Course from "./Course";

const AllCourse = (props) => {
    return (
        <Card className="AllCourse">
            <h2 className="Title">Courses</h2>
            <div className="CourseList">
                <Course className="activeCourse" name="Oscillation" moduleNumber={11}/>
                <Course name="DNA" moduleNumber={3}/>
            </div>
        </Card>
    )
}

export default AllCourse;