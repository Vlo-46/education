import React from 'react'
import Layout from "../layout/Layout";
import CoursesBanner from "../components/Courses_banner/Courses_banner";
import SetCourse from "../components/Courses_slider/SetCourse";
// import Particle from "../components/Particles/Particle";

const Courses = () => {
    return (
        <Layout>
            <div className={'position-relative'}>
                <CoursesBanner/>
                <SetCourse/>
                {/*<Particle/>*/}
            </div>

        </Layout>
    )
}

export default Courses