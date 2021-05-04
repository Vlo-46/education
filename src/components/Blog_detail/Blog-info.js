import React from 'react'
import styles from './blog_detail.module.css'
import BlogShare from "./Share";
import BlogComment from "./Comment";

const BlogInfo = ({blog}) => {
    return (
        <div className="col-sm-12 col-md-8 col-lg-9">
            <div className={styles.imgField}>
                <img src="https://krugosvitka.com/wp-content/uploads/2018/08/rawpixel-973137-unsplash.jpg" alt=""/>
            </div>
            <div className={`${styles.infoField}`}>
                <p>{blog.description}</p>
            </div>
            <BlogShare/>
            <BlogComment/>
        </div>
    )
}

export default BlogInfo