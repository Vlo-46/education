import React from 'react'
import styles from "./students.module.css";

const TeacherStudent = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
            <div className={styles.student}>
                <div className={styles.studentBackground} style={{backgroundImage: "url('assets/images/course.jpg')"}}>

                </div>
                <div className={`${styles.studentBody}`}>
                    <div className={styles.profileInfo}>
                        <img src="assets/images/teacher-1.png" alt="student" className={styles.profileImage}/>
                        <p className={styles.studentName}>Կարեն Կարապետյան</p>
                    </div>
                    <div className={styles.messageField}>
                        <button className={'btn'}>Նամակ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherStudent