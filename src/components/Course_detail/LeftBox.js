import React from 'react'
import CourseDetailVideo from "./Video";
import AboutMe from "./AboutMe";
import CourseDetailInfo from "./Info";

const CourseDetailLeftBox = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-8">
            <CourseDetailInfo />
            <AboutMe/>
            <CourseDetailVideo/>
        </div>
    )
}

export default CourseDetailLeftBox