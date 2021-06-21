import React, {useEffect, useState} from 'react'
import styles from './notifications.module.css'
import axios from "axios";
import keys from "../../../keys";
import openSocket from "socket.io-client";
import moment from 'moment'
import 'moment/locale/hy-am'
import NotificationModal from "./Modal";

const Notification = ({notification, candidate}) => {
    const [notificationModal, setNotificationModal] = useState(null)

    let checkedStyle = {
        backgroundColor: '#EDF2FB'
    }

    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id: candidate.role === 'teacher' ? notification.student_id : notification.teacher_id}
        })
            .then(res => {
                setUser(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [notification.student_id])

    let CHECK_REQUEST = data => {
        let socket = openSocket(keys.ENDPOINT, {transports: ['websocket']})
        socket.emit('check notification', data)
    }

    let CLOSE_MODAL = bool => {
        setNotificationModal(bool)
    }

    console.log(notification);

    if (candidate.role === 'teacher') {
        return (
            <div className={styles.notificationsItem} style={notification.seen ? null : checkedStyle}>
                {
                    user
                        ? <div className={styles.notificationStudentField}>
                            <div className={styles.notificationStudentImage}>
                                {
                                    user.image
                                        ? <img src={user.image} alt={user.name}/>
                                        : <img src={'assets/images/no-photo.png'} alt={user.name}/>
                                }
                            </div>
                            <div className={'pl-2'}>
                                <span className={styles.notificationUsername}>{user.name}</span>
                                <p className={styles.notificationSendedAt}>
                                    <span>{moment(notification.createdAt).format('L')}</span>
                                    <br/>
                                    <span>{moment(notification.createdAt).startOf('day').fromNow()}</span>
                                </p>
                            </div>
                        </div>
                        : null
                }

                <div className={styles.notificationInfo}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut culpa excepturi ipsa
                        iusto
                        laborum natus sit totam voluptate ?
                    </p>
                </div>
                <div className={styles.processField}>
                    <div className={styles.requestTypeField}>
                        {
                            notification.status === 'during'
                                ? <i className={`fa fa-question ${styles.questionStatus}`}/>
                                : null
                        }
                        {
                            notification.status === 'approved'
                                ? <i className={`fa fa-check ${styles.approvedStatus}`}/>
                                : null
                        }
                        {
                            notification.status === 'denied'
                                ? <i className={`fa fa-times ${styles.deniedStatus}`}/>
                                : null
                        }
                        <i className={`fa fa-eye ${styles.viewField}`} onClick={() => setNotificationModal(true)}/>
                    </div>
                    {
                        notification.seen
                            ? null
                            : <div className={styles.dotsField}>
                                <img src="assets/icons/dots.svg"
                                     className={`${styles.msgDots} dropdown-toggle dropdown-toggle-split`}
                                     data-bs-toggle="dropdown"
                                     aria-expanded="false"
                                     alt={'dot icon'}
                                />
                                <ul className={`dropdown-menu p-2 ${styles.openedWindow}`}>
                                    <li onClick={() => CHECK_REQUEST({
                                        status: 'approved',
                                        notification_id: notification.id,
                                        student_id: user.id,
                                        teacher_id: candidate.id,
                                        lessons: notification.Lessons_hour
                                    })
                                    }>
                                        <small>Ընդունել</small>
                                    </li>
                                    <li onClick={() => CHECK_REQUEST({status: 'denied', notification_id: notification.id})}>
                                        <small>Մերժել</small>
                                    </li>
                                </ul>
                            </div>
                    }
                </div>
                {
                    notificationModal
                        ? <NotificationModal lessons={JSON.parse(notification.Lessons_hour.hours)}
                                             CLOSE_MODAL={CLOSE_MODAL}/>
                        : null
                }
            </div>
        )
    }

    if (candidate.role === 'student') {
        return (
            <div className={styles.notificationsItem} style={notification.seen ? null : checkedStyle}>
                {
                    user
                        ? <div className={styles.notificationStudentField}>
                            <div className={styles.notificationStudentImage}>
                                {
                                    user.image
                                        ? <img src={user.image} alt={user.name}/>
                                        : <img src={'assets/images/no-photo.png'} alt={user.name}/>
                                }
                            </div>
                            <div className={'pl-2'}>
                                <span className={styles.notificationUsername}>{user.name}</span>
                                <p className={styles.notificationSendedAt}>
                                    <span>{moment(notification.createdAt).format('L')}</span>
                                    <br/>
                                    <span>{moment(notification.createdAt).startOf('day').fromNow()}</span>
                                </p>
                            </div>
                        </div>
                        : null
                }

                <div className={styles.notificationInfo}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut culpa excepturi ipsa
                        iusto
                        laborum natus sit totam voluptate ?
                    </p>
                </div>
                <div className={styles.processField}>
                    <div className={styles.requestTypeField}>
                        {
                            notification.status === 'during'
                                ? <i className={`fa fa-question ${styles.questionStatus}`}/>
                                : null
                        }
                        {
                            notification.status === 'approved'
                                ? <i className={`fa fa-check ${styles.approvedStatus}`}/>
                                : null
                        }
                        {
                            notification.status === 'denied'
                                ? <i className={`fa fa-times ${styles.deniedStatus}`}/>
                                : null
                        }
                        <i className={`fa fa-eye ${styles.viewField}`} onClick={() => setNotificationModal(true)}/>
                    </div>
                </div>
                {
                    notificationModal
                        ? <NotificationModal lessons={JSON.parse(notification.Lessons_hour.hours)}
                                             CLOSE_MODAL={CLOSE_MODAL}/>
                        : null
                }
            </div>
        )
    }

}

export default Notification