import React, {useEffect} from 'react'
import Layout from "../layout/Layout";
import TeacherProfile from "../components/Profile/TeacherProfile/TeacherProfile";
import StudentProfile from "../components/Profile/StudentProfile/StudentProfile";
import TeacherProfileLayout from "../layout/TeacherProfileLayout";
import StudentProfileLayout from "../layout/StudentProfileLayout";
import keys from "../keys";
import {useDispatch, useSelector} from "react-redux";
import {getCandidate} from "../redux/actions/profileAction";

const Profile = () => {
    // let dispatch = useDispatch()
    //
    // useEffect(() => {
    //     if (localStorage.getItem(keys.AUTH)) {
    //         let auth = JSON.parse(localStorage.getItem(keys.AUTH))
    //         dispatch(getCandidate(auth))
    //     } else {
    //         window.location.href = '/'
    //     }
    // }, [])
    //
    // let candidate = useSelector(state => state.profile.candidate)
    let candidate = {
        role: 'teacher'
    }

    return (
        <Layout>
            {
                candidate
                    ? candidate.role === 'teacher'
                    ? <TeacherProfileLayout>
                        <TeacherProfile candidate={candidate}/>
                    </TeacherProfileLayout>
                    : <StudentProfileLayout>
                        <StudentProfile candidate={candidate}/>
                    </StudentProfileLayout>
                    : null
            }
        </Layout>
    )
}

export default Profile