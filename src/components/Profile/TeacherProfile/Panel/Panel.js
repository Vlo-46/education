import React from 'react'
import styles from './panel.module.css'
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";
import ProfileHead from "./ProfileHeader";

const Panel = () => {
    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]
    return (
        <div className={styles.panelWrapperBox}>
            <div className="row">
                <div className="col-md-9">
                    <ProfileHead/>
                </div>
                <div className="col-md-3">
                    <div className="col-md-2 bg-white position-relative pt-5" style={{boxShadow: '0 0 5px 0 #ccc'}}>
                        <p className={styles.chatTitle}>Ուսանողներ</p>
                        <div className={`${styles.onlineStudentsField}`}>
                            {
                                onlineStudents.map(student => <OnlineStudent student={student} key={student.id}/>)
                            }
                        </div>
                        <SearchStudents/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel