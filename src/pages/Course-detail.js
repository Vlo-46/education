import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Layout from "../layout/Layout";
import Reviews from "../components/Reviews/Reviews";
import CourseDetailLeftBox from "../components/Course_detail/LeftBox";
import CourseDetailRightBox from "../components/Course_detail/RightBox";
import CourseDetailBanner from "../components/Course_detail/Banner";
import {hideProfileLoader, showProfileLoader} from "../redux/actions/profileAction";
import {useDispatch, useSelector} from "react-redux";
import ProfileLoader from "../components/Profile/ProfileLoader/ProfileLoader";
import keys from "../keys";
import axios from "axios";

const CourseDetail = () => {
    const [candidate, setCandidate] = useState(null)
    let dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(showProfileLoader())
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id}
        })
            .then(res => {
                setCandidate(res.data)
                dispatch(hideProfileLoader())
                console.log(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    let profileLoader = useSelector(state => state.app.profileLoader)

    if (profileLoader) {
        return <Layout>
            <div className="container">
                <ProfileLoader profileLoader={profileLoader}/>
            </div>
        </Layout>
    }
    return (
        <Layout>
            {
                candidate
                    ? <>
                        <CourseDetailBanner/>
                        <section style={{padding: '0 140px'}}>
                            <div className="row mt-3">
                                <CourseDetailLeftBox candidate={candidate}/>
                                <CourseDetailRightBox candidate={candidate}/>
                            </div>
                            <Reviews candidate={candidate}/>
                        </section>
                    </>
                    : null
            }

        </Layout>
    )
}

export default CourseDetail