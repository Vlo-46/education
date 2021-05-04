import React from 'react'
import styles from './blog_detail.module.css'

const BlogComment = () => {
    return (
        <div className={`mt-5`}>
            <h5>Թողնել մեկնաբանություն:</h5>
            <div className={`${styles.commentsField} p-5`}>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                            <label htmlFor="name">Անուն</label>
                            <input type="text" className="form-control" name='name'/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor="email">Էլ-հասցե</label>
                        <input type="text" className="form-control" name='email'/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Ձեր մեկնաբանությունը</label>
                    <textarea name="comment" className="form-control" style={{height: '150px', resize: 'none'}}/>
                </div>
                <div className="form-group">
                    <button className={`${styles.sendBtn} btn`}>Ուղարկել</button>
                </div>
            </div>
        </div>
    )
}

export default BlogComment