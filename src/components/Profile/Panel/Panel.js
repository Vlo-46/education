import React, {useEffect, useState} from 'react'
import styles from './panel.module.css'
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";
import TeacherProfileHead from "./TeacherProfileHead";
import StudentProfileHead from "./StudentProfileHead";
import ProgressBar from "./ProgressBar";
import ProfileInfo from "./ProfileInfo";
import Lesson from "./Lesson";
import Schedule from "./Schedule";
import keys from "../../../keys";
import axios from "axios";
import {useSelector} from "react-redux";

const Panel = ({candidate}) => {
    const [teacherProfession, setTeacherProfession] = useState(null)
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem(keys.AUTH))
        axios.get(`${keys.BACKEND_URI}/subject/get_single_subject`, {
            params: {id: candidate.id},
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(res => {
                setTeacherProfession(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [candidate.id])


    console.log(candidate)
    let friends = useSelector(state => state.profile.friends)
    let notifications = useSelector(state => state.profile.notification)

    let lessons = []
    notifications.forEach(notification => {
        if (notification.status == 'approved') {
            lessons.push(notification.Lessons_hour)
        }
    })

    console.log(lessons)

    return (
        <div className={styles.panelWrapperBox}>
            <div className="row">
                <div className="col-md-9">
                    {
                        candidate.role === 'teacher'
                            ? <TeacherProfileHead candidate={candidate} teacherProfession={teacherProfession}/>
                            : <StudentProfileHead candidate={candidate}/>
                    }
                    <div className="profileBody mt-5 mb-5 pl-2">
                        <div className="row">
                            <div className="col-md-4">
                                <ProgressBar candidate={candidate}/>
                                <ProfileInfo educations={candidate.Teacher_educations}
                                             phones={candidate.Teacher_phones}
                                             address={candidate.TeacherAddresses}
                                             work_experiences={candidate.Teacher_work_experiences}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className={'d-flex justify-content-between'}>
                                    <h6 className={'mb-3'}>Անհատական</h6>
                                    <p>Տեսնել բոլորը</p>
                                </div>
                                <div className="row">
                                    <Lesson/>
                                    <Lesson/>
                                    <Lesson/>
                                    <Lesson/>
                                </div>
                                <div className={'d-flex justify-content-between mt-5'}>
                                    <h6>Դասացուցակ</h6>
                                    <p>Տեսնել բոլորը</p>
                                </div>
                                <div className={'row'}>
                                    <Schedule/>
                                    <Schedule/>
                                    <Schedule/>
                                    <Schedule/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  position-relative bg-white p-3" style={{boxShadow: '0 0 5px 0 #ccc'}}>
                    <p className={styles.chatTitle}>Ուսանողներ</p>
                    <div className={`${styles.onlineStudentsField}`}>
                        {
                            friends.length
                                ? friends.map(friend => <OnlineStudent friend={friend} key={friend.id}/>)
                                : null
                        }
                    </div>
                    <SearchStudents/>
                </div>
            </div>
        </div>
    )
}

export default Panel