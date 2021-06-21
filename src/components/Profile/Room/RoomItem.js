import React, {useEffect, useState} from 'react'
import styles from "./room.module.css";
import RoomAlert from "./RoomAlert";
import axios from "axios";
import keys from "../../../keys";
import moment from "moment";
import 'moment/locale/en-au'

const RoomItem = ({lessons, candidateId}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id: lessons.student_id === candidateId ? lessons.teacher_id : lessons.student_id}
        })
            .then(res => {
                setUser(res.data)
            })
    }, [])

    let OPEN_IN_ROOM = () => {
        setIsOpen(true)
    }

    let CLOSE_MODAL = bool => {
        setIsOpen(bool)
    }

    let today = moment().format('dddd').toLowerCase()

    let currentComponent = JSON.parse(lessons.hours).map(lesson => {
        let currentTime = moment().format('HH:mm');

        let startTime = lesson.start_time.split(':')
        let endTime = lesson.end_time.split(':')
        let startTimeInSeconds = (Number(startTime[0]) * 3600) + (Number(startTime[1] * 60))
        let endTimeInSeconds = (Number(endTime[0]) * 3600) + (Number(endTime[1] * 60))
        console.log(`start to - ${startTimeInSeconds}, end to - ${endTimeInSeconds}`)

        let currentTimeSplited = currentTime.split(':')
        let currentTimeInSeconds = (Number(currentTimeSplited[0]) * 3600) + (Number(currentTimeSplited[1] * 60))
        console.log(`current time - ${currentTimeInSeconds}`)
        console.log(lesson)

        if (today.toLowerCase() === lesson.weekday.toLowerCase() && startTimeInSeconds <= currentTimeInSeconds && currentTimeInSeconds <= endTimeInSeconds) {
            console.log(true)
            return <img src="assets/icons/access-call.svg"
                        alt="access"
                        className={styles.statusAccess}
                        onClick={OPEN_IN_ROOM}
            />
        } else {
            return <img src="assets/icons/dont-call.svg"
                        alt="dont"
                        className={styles.statusPrevention}
            />
        }
    })


    return (
        <tr>
            <th scope="row">
                {
                    user
                        ? <div className={styles.student}>
                            {
                                user.image
                                    ? <img src={user.image}
                                           alt={user.name}
                                           className={styles.studentImg}
                                    />
                                    : <img src="assets/images/no-photo.png" alt={user.name} className={styles.studentImg}/>
                            }
                            <span>{user.name}&nbsp;{user.surname}</span>
                        </div>
                        : null
                }
            </th>
            <td>պարապմունք</td>
            <td>օրը</td>
            <td>ժամ</td>
            <td>
                {
                    currentComponent
                }
            </td>
            {
                isOpen
                    ? <RoomAlert CLOSE_MODAL={CLOSE_MODAL}/>
                    : null
            }
        </tr>
    )

}

export default RoomItem