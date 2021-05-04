import React from 'react'
import styles from './contact.module.css'

const Contact_banner = () => {
    return (
        <section className={styles.banner} style={{backgroundImage: "url('assets/images/blog-banner.png')"}}>
            <h4 className={styles.pageTitle}>Կապ</h4>
        </section>
    )
}

export default Contact_banner