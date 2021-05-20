import React, {useState} from 'react'
import styles from "./room.module.css";
import RoomAlert from "./RoomAlert";

const RoomItem = ({roomItem}) => {
    const [isOpen, setIsOpen] = useState(false)

    let OPEN_IN_ROOM = () => {
        setIsOpen(true)
    }

    return (
        <tr>
            <th scope="row">
                <div className={styles.student}>
                    <img src={roomItem.student.image}
                         alt={roomItem.student.name}
                         className={styles.studentImg}
                    />
                    <span>{roomItem.student.name}&nbsp;{roomItem.student.surname}</span>
                </div>
            </th>
            <td>{roomItem.training}</td>
            <td>{roomItem.date}</td>
            <td>{roomItem.time}</td>
            <td>
                {
                    roomItem.status
                        ? <img src="assets/icons/access-call.svg"
                               alt="access"
                               className={styles.statusAccess}
                               onClick={OPEN_IN_ROOM}
                        />
                        : <img src="assets/icons/dont-call.svg"
                               alt="dont"
                               className={styles.statusPrevention}
                        />
                }

            </td>
            {
                isOpen
                    ? <RoomAlert/>
                    : null
            }
        </tr>
    )
}

export default RoomItem