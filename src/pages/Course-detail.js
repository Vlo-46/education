import React from 'react'
import Layout from "../layout/Layout";
import Reviews from "../components/Reviews/Reviews";
import CourseDetailLeftBox from "../components/Course_detail/LeftBox";
import CourseDetailRightBox from "../components/Course_detail/RightBox";
import CourseDetailBanner from "../components/Course_detail/Banner";

const CourseDetail = () => {
    return (
        <Layout>
            <CourseDetailBanner/>
            <section style={{padding: '0 140px'}}>
                <div className="row mt-3">
                    <CourseDetailLeftBox/>
                    <CourseDetailRightBox/>
                </div>
                <Reviews/>
            </section>
        </Layout>
    )
}

export default CourseDetail