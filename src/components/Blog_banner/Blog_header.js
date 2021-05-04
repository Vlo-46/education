import React from 'react'
import styles from './blog_header.module.css'

const Blog_header = () => {
    return (
        <section className={styles.banner} style={{backgroundImage: "url('assets/images/blog-banner.png')"}}>
            <h4 className={styles.pageTitle}>Բլոգ</h4>
        </section>
    )
}

export default Blog_header