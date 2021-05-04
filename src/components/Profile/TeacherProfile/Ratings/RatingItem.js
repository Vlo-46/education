import React from 'react'
import styles from './rating.module.css'

const RatingItem = ({ratingItem}) => {
    return (
        <tr>
            <div className={styles.student}>
                <img src={ratingItem.student.image}
                     alt={ratingItem.student.name}
                     className={styles.studentImg}
                />
                <span>{ratingItem.student.name}&nbsp;{ratingItem.student.surname}</span>
            </div>
            <td>{ratingItem.review}</td>
            <td className={styles.rateBox}>
                {
                    [...Array(ratingItem.rate)].map((x, i) => (
                        <img src="assets/icons/star.png" alt={x} key={i}/>
                    ))
                }
            </td>
        </tr>
    )
}
export default RatingItem