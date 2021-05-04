import React from 'react'
import styles from './messages.module.css'

const Message = () => {
    return (
        <div className={`form-group ${styles.messageField} mt-2 mb-2 p-3`}>
            <div className={styles.candidateImg}>
                <img src="assets/images/teacher-2.png" alt="teacher"/>
            </div>
            <div className={`${styles.singleMsg}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, consequatur illum minima quasi
                quia recusandae sit. Alias, consectetur, dolores excepturi impedit libero nam officiis perspiciatis
                provident, quaerat quis quisquam recusandae sunt. Dolor dolore eveniet illo, laudantium quis soluta?
                Culpa debitis dolorem illum mollitia non optio praesentium recusandae reiciendis totam, velit!
            </div>
            <div className={'p-2'}>
                <img src="assets/icons/dots.svg"
                     alt="dots"
                     className={`${styles.msgDots} dropdown-toggle dropdown-toggle-split`}
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                />
                <ul className={`dropdown-menu p-2 ${styles.openedWindow}`}>
                    <li><small>Փոփոխել</small></li>
                    <li><small>Ջնջել</small></li>
                </ul>
            </div>
        </div>
    )
}

export default Message