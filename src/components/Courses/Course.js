import React from 'react'
import styles from './courses.module.css'

const Course = ({course}) => {
    return (
        <div className={'p-2'}>
            <div className={styles.course_box}>
                <div>
                    <img src={course.image} alt={course.title} className={styles.course_img}/>
                </div>
                <div>
                    <span>{course.title}</span>
                </div>
            </div>
        </div>
    )
}

export default Course