import React, {useState} from 'react'
import RoomItem from "./RoomItem";
import styles from './room.module.css'
import {useSelector} from "react-redux";

const Room = ({candidate}) => {
    let notifications = useSelector(state => state.profile.notification)

    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Դասասենյակ</p>
            <div className="room_box table-responsive">
                <table className={`table table-hover ${styles.table}`}>
                    <thead>
                    <tr>
                        <th scope="col">Ուսանող</th>
                        <th scope="col">Պարապմունք</th>
                        <th scope="col">Ամիս ամսաթիվ</th>
                        <th scope="col">Ժամ</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        notifications.length
                            ? notifications.map(notification => (
                                <RoomItem key={notification.id}
                                          lessons={notification.Lessons_hour}
                                          candidateId={candidate.id}
                                />
                            ))
                            : null
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Room