import React from 'react'
import styles from "./students.module.css";
import {useDispatch} from "react-redux";
import {closeWindowMessageField, openWindowMessageField} from "../../../redux/actions/profileAction";

const TeacherStudent = ({friend}) => {
    let dispatch = useDispatch()

    let OPEN_MESSAGE_FIELD = id => {
        dispatch(closeWindowMessageField(null))
        dispatch(openWindowMessageField(id))
    }


    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
            <div className={styles.student}>
                <div className={styles.studentBackground}
                     style={friend.image ? friend.image : {backgroundImage: "url('assets/images/no-photo.png')"}}
                >

                </div>
                <div className={`${styles.studentBody}`}>
                    <div className={styles.profileInfo}>
                        {
                            friend.image
                                ? <img src={friend.image} alt="student" className={styles.profileImage}/>
                                : <img src="assets/images/no-photo.png" alt="student" className={styles.profileImage}/>
                        }
                        <p className={styles.studentName}>{friend.name} {friend.surname}</p>
                    </div>
                    <div className={styles.messageField}>
                        <button className={'btn'} onClick={() => OPEN_MESSAGE_FIELD(friend.id)}>Նամակ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherStudent