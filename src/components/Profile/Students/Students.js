import React from 'react'
import TeacherStudent from "./Student";
import StudentPagination from "./StudentPagination";
import styles from "../Notifications/notifications.module.css";
import OnlineStudent from "../Notifications/OnlineStudent";
import SearchStudents from "../Notifications/SearchStudents";

const Students = () => {
    let onlineStudents = [
        {id: 1, username: 'Սոնա Սիմոնյան', image: 'assets/images/teacher-1.png'},
        {id: 2, username: 'Նարեկ Խաչատրյան', image: 'assets/images/teacher-2.png'},
        {id: 3, username: 'Աննա Կարապետյան', image: 'assets/images/teacher-1.png'},
    ]
    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Ուսանողներ</p>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <TeacherStudent/>
                        <TeacherStudent/>
                        <TeacherStudent/>
                        <TeacherStudent/>
                        <TeacherStudent/>
                        <TeacherStudent/>
                    </div>
                    <StudentPagination/>
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
        </div>
    )
}

export default Students