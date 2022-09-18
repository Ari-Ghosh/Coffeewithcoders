import AllCourse from './AllCourse/AllCourse'
import SingleCourse from './SingleCourse/SingleCourse';
import './CoursesMain.css'
import React from 'react';

const CoursesMain = () => {
    return (
        <React.Fragment>
            <AllCourse/>
            <SingleCourse/>
        </React.Fragment>
    )
};

export default CoursesMain;