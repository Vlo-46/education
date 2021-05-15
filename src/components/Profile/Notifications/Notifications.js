import React from 'react';
import styles from './notifications.module.css';
import OnlineStudent from "./OnlineStudent";
import Notification from "./Notification";
import NotificationPagination from "./NotificationPagination";
import SearchStudents from "./SearchStudents";
import {useSelector} from "react-redux";

const Notifications = () => {
    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]

    let notifications = useSelector(state => state.profile.notification)

    return (
        <>
            <div className={'row'}>
                <div className="col-md-9 bg-light pt-5">
                    <p className={styles.notTitle}>Ծանուցումներ</p>
                    <div className={styles.notificationsField}>
                        {
                            notifications.length
                                ? notifications.map(notification => <Notification key={notification.id}
                                                                                  notification={notification}/>)
                                : null
                        }
                    </div>
                    <NotificationPagination/>
                </div>
                <div className="col-md-3 bg-white position-relative p-3" style={{boxShadow: '0 0 5px 0 #ccc'}}>
                    <p className={styles.chatTitle}>Ուսանողներ</p>
                    <div className={`${styles.onlineStudentsField}`}>
                        {
                            onlineStudents.map(student => <OnlineStudent student={student} key={student.id}/>)
                        }
                    </div>
                    <SearchStudents/>
                </div>
            </div>
        </>
    )
}

export default Notifications