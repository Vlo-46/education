import React from 'react'
import CourseDetailVideo from "./Video";
import AboutMe from "./AboutMe";
import CourseDetailInfo from "./Info";

const CourseDetailLeftBox = ({candidate}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-8">
            <CourseDetailInfo candidate={candidate}/>
            <AboutMe/>
            {
                candidate.Teacher_videos.length
                    ? <CourseDetailVideo video={candidate.Teacher_videos}/>
                    : null
            }

        </div>
    )
}

export default CourseDetailLeftBox