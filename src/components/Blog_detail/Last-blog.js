import React from 'react'
import styles from './blog_detail.module.css'

const LastBlogItem = ({blog}) => {
    return (
        <div className={`${styles.lastBlogItem} mb-4`}>
            <div className={styles.blogImgField}>
                <img src={blog.image} alt=""/>
            </div>
            <div className={styles.blogInfoField}>
                <p className={styles.blogTitle}>{blog.title}</p>
                <p className={styles.webSiteName}>
                    <span>
                        <img src="assets/icons/education.png" alt=""/>
                        <small>{blog.websiteName}</small>
                    </span>
                    <span>
                        <img src="assets/icons/share.png" alt=""/>
                    </span>
                </p>
            </div>
        </div>
    )
}


export default LastBlogItem