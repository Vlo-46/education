import React, {useEffect, useState} from 'react'
import Layout from "../layout/Layout";
import ProfileLayout from "../layout/ProfileLayout";
import Panel from "../components/Profile/Panel/Panel";
import Notifications from "../components/Profile/Notifications/Notifications";
import Room from "../components/Profile/Room/Room";
import Messages from "../components/Profile/Messages/Messages";
import Students from "../components/Profile/Students/Students";
import Ratings from "../components/Profile/Ratings/Ratings";
import CalendarField from "../components/Profile/Calendar/CalendarField";
import Summery from "../components/Profile/Summery/Summery";
import Settings from "../components/Profile/Settings/Settings";
import ProfileField from "../components/Profile/Profile/ProfileField";
import keys from "../keys";
import {useDispatch, useSelector} from "react-redux";
import {getTeacher} from "../redux/actions/profileAction";
import axios from "axios";
import ProfileLoader from "../components/Profile/ProfileLoader/ProfileLoader";

const Profile = () => {
    const [teacherProfession, setTeacherProfession] = useState(null)
    let dispatch = useDispatch()
    let candidate = useSelector(state => state.profile.candidate)

    useEffect(() => {
        if (localStorage.getItem(keys.AUTH)) {
            let auth = JSON.parse(localStorage.getItem(keys.AUTH))
            dispatch(getTeacher(auth))

            if (candidate) {
                axios.get(`${keys.BACKEND_URI}/subject/get_single_subject`, {
                    params: {id: candidate.id},
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
                    .then(res => {
                        setTeacherProfession(res.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }

        } else {
            window.location.href = '/'
        }
    }, [])


    let menuTab = useSelector(state => state.profile.menuTab)

    let currentComponent = () => {
        if (candidate.role === 'student') {
            switch (menuTab) {
                case 'panel':
                    return <Panel candidate={candidate}/>
                case 'notifications':
                    return <Notifications candidate={candidate}/>
                case 'messages':
                    return <Messages candidate={candidate}/>
                case 'summery':
                    return <Summery candidate={candidate}/>
                case 'settings':
                    return <Settings candidate={candidate}/>
                case 'profile':
                    return <ProfileField candidate={candidate} tab={menuTab} teacherProfession={teacherProfession}/>
                default:
                    return <Panel candidate={candidate}/>
            }
        } else if (candidate.role === 'teacher') {
            switch (menuTab) {
                case 'panel':
                    return <Panel candidate={candidate}/>
                case 'notifications':
                    return <Notifications candidate={candidate}/>
                case 'room':
                    return <Room candidate={candidate}/>
                case 'messages':
                    return <Messages candidate={candidate}/>
                case 'students':
                    return <Students candidate={candidate}/>
                case 'ratings':
                    return <Ratings candidate={candidate}/>
                case 'calendar':
                    return <CalendarField candidate={candidate}/>
                case 'summery':
                    return <Summery candidate={candidate}/>
                case 'settings':
                    return <Settings candidate={candidate}/>
                case 'profile':
                    return <ProfileField candidate={candidate} tab={menuTab} teacherProfession={teacherProfession}/>
                default:
                    return <Panel candidate={candidate}/>
            }
        } else {
            window.location.href = '/'
        }
    }

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
                    ? <ProfileLayout currentComponent={currentComponent()} candidate={candidate}/>
                    : null
            }
        </Layout>
    )
}

export default Profile