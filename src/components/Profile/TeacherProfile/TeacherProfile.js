import React from 'react'
import {useSelector} from "react-redux";
import Panel from "./Panel/Panel";
import Notifications from "./Notifications/Notifications";
import Room from "./Room/Room";
import Messages from "./Messages/Messages";
import Students from "./Students/Students";
import Ratings from "./Ratings/Ratings";
import CalendarField from "./Calendar/CalendarField";
import Summery from "./Summery/Summery";
import Settings from "./Settings/Settings";
import TeacherProfileField from "./Profile/TeacherProfileField";

const TeacherProfile = ({candidate}) => {
    let menuTab = useSelector(state => state.profile.menuTab)

    let currentComponent = () => {
        switch (menuTab) {
            case 'panel':
                return <Panel/>
            case 'notifications':
                return <Notifications/>
            case 'room':
                return <Room/>
            case 'messages':
                return <Messages/>
            case 'students':
                return <Students/>
            case 'ratings':
                return <Ratings/>
            case 'calendar':
                return <CalendarField/>
            case 'summery':
                return <Summery/>
            case 'settings':
                return <Settings/>
            case 'profile':
                return <TeacherProfileField/>
            default:
                return <Panel/>
        }
    }

    return (
        <section>
            {currentComponent()}
        </section>
    )
}

export default TeacherProfile