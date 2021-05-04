import React from 'react'
import styles from './banner.module.css'

const Courses_banner = () => {
    return (
        <section style={{backgroundImage: "url(assets/images/course.jpg)"}}
                 className={styles.banner}
        >
            <div className={styles.bannerChildField}>
                <h3>NEW ONLINE COURSES</h3>
                <p>Education Without Leaving Home</p>
            </div>
        </section>
    )
}

export default Courses_banner