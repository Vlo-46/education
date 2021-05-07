import React, {useEffect} from 'react'
import Layout from "../layout/Layout";
// import TeacherProfile from "../components/Profile/TeacherProfile";
// import StudentProfile from "../components/Profile/StudentProfile/StudentProfile";
// import TeacherProfileLayout from "../layout/TeacherProfileLayout";
// import StudentProfileLayout from "../layout/StudentProfileLayout";
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
import {getCandidate} from "../redux/actions/profileAction";

const Profile = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem(keys.AUTH)) {
            let auth = JSON.parse(localStorage.getItem(keys.AUTH))
            dispatch(getCandidate(auth))
        } else {
            window.location.href = '/'
        }
    }, [])

    let candidate = useSelector(state => state.profile.candidate)

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
                    return <ProfileField candidate={candidate}/>
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
                    return <ProfileField candidate={candidate}/>
                default:
                    return <Panel candidate={candidate}/>
            }
        } else {
            window.location.href = '/'
        }
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