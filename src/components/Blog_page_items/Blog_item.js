import React from 'react'
import styles from './blog.module.css'
import {Link} from 'react-router-dom'

const Blog_item = ({blog}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-5" key={blog.id}>
            <Link to={`/blog-detail/${blog.id}`}>
                <div className={styles.blog}>
                    <div className={styles.imgField}>
                        <img src={'https://www.voovadigital.com/wp-content/uploads/beverage-3157395_640.jpg'}
                             alt={blog.image}
                        />
                    </div>
                    <div className={styles.bodyField}>
                        <div style={{padding: '15px 0'}}>
                            <span style={{color: '#061358'}}>{blog.title}</span>
                        </div>
                        <div className={'d-flex justify-content-between'}>
                            <div>
                                <img src="assets/icons/education.png" alt=""/>
                                &nbsp;
                                <span style={{color: '#061358', fontSize: '14px'}}>{blog.websiteName}</span>
                            </div>
                            <div>
                                <img src="assets/icons/share.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Blog_item