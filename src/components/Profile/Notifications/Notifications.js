import React, {useEffect} from 'react';
import styles from './notifications.module.css';
import OnlineStudent from "./OnlineStudent";
import Notification from "./Notification";
import NotificationPagination from "./NotificationPagination";
import SearchStudents from "./SearchStudents";
import {useDispatch, useSelector} from "react-redux";
import openSocket from "socket.io-client";
import keys from "../../../keys";
import {checkNotificationRequest, setNotification} from "../../../redux/actions/profileAction";

const Notifications = ({candidate}) => {
    let dispatch = useDispatch()
    useEffect(() => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.on('new notification', data => {
            dispatch(setNotification(data))
        })
        socket.on('checked notification', data => {
            if (data.msg == 'ok') {
                dispatch(checkNotificationRequest({notification_id: data.notification_id, status: data.status}))
            } else {
                alert('error')
            }
        })
    }, [])

    let notifications = useSelector(state => state.profile.notification)
    let friends = useSelector(state => state.profile.friends)
    console.log(notifications)
    // console.log(candidate)
    return (
        <>
            <div className={'row'}>
                <div className="col-md-9 bg-light pt-5">
                    <p className={styles.notTitle}>Ծանուցումներ</p>
                    <div className={styles.notificationsField}>
                        {
                            notifications.length
                                ? notifications.map(notification => <Notification key={notification.id}
                                                                                  notification={notification}
                                                                                  candidate={candidate}
                                />)
                                : null
                        }
                    </div>
                    <NotificationPagination/>
                </div>
                <div className="col-md-3 bg-white position-relative p-3" style={{boxShadow: '0 0 5px 0 #ccc'}}>
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
        </>
    )
}

export default Notifications