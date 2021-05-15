import React, {useEffect, useState} from 'react'
import styles from './rating.module.css'
import axios from "axios";
import keys from "../../../keys";

const RatingItem = ({review}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`${keys.BACKEND_URI}/auth/get_user`, {
            params: {id: review.student_id}
        })
            .then(res => {
                setUser(res.data)
            })
            .catch(e => {
                console.log(e)
            })

    }, [review.student_id])


    return (
        <tr>
            <div className={styles.student}>
                {
                    user
                        ? <>
                            {
                                user.image
                                    ? <img src={user.image}
                                           alt={'teacher'}
                                           className={styles.studentImg}
                                    />
                                    : <img src={'assets/images/no-photo.png'}
                                           alt={'teacher'}
                                           className={styles.studentImg}
                                    />
                            }

                            <span>{user.name}&nbsp;{user.surname}</span>
                        </>
                        : null
                }

            </div>
            <td>{review.review}</td>
            <td className={styles.rateBox}>
                {
                    [...Array(review.rate)].map((x, i) => (
                        <img src="assets/icons/star.png" alt={x} key={i}/>
                    ))
                }
            </td>
        </tr>
    )
}
export default RatingItem