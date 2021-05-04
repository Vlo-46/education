import React from 'react'
import RoomItem from "./RoomItem";
import styles from './room.module.css'

const Room = () => {
    let roomItems = [
        {
            id: 1,
            student: {name: 'Քրիստինե', surname: 'Կառլենյան', image: 'assets/images/teacher-1.png'},
            date: '23.04.2021',
            time: '10:00-11:00',
            training: 6,
            status: true
        },
        {
            id: 2,
            student: {name: 'Կարեն', surname: 'Կարապետյան', image: 'assets/images/teacher-2.png'},
            date: '23.04.2021',
            time: '11:00-12:00',
            training: 5,
            status: false
        },
        {
            id: 3,
            student: {name: 'Մարինե', surname: 'Սանոսյան', image: 'assets/images/teacher-1.png'},
            date: '23.04.2021',
            time: '14:00-15:00',
            training: 4,
            status: false
        },
        {
            id: 4,
            student: {name: 'Համազասպ', surname: 'Միլիտոսյան', image: 'assets/images/teacher-2.png'},
            date: '23.04.2021',
            time: '15:00-16:00',
            training: 3,
            status: false
        },
    ]

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
                        roomItems.map(roomItem => <RoomItem key={roomItem.id} roomItem={roomItem}/>)
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Room