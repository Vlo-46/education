import React, {useEffect, useState} from 'react'
import styles from './reviews.module.css'
import axios from "axios";
import keys from "../../keys";

const Review = ({review}) => {
    const [user, setUser] = useState(null)
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
    }, [])

    return (
        <div className={'p-3'}>
            <div className={`${styles.review} p-5`}>
                {
                    user
                        ? <div className={`${styles.header}`}>
                            <div className={'d-flex align-items-center'}>
                                <div>
                                    {
                                        user.image
                                            ? <img src={user.image}
                                                   alt={user.name}
                                                   style={{width: '80px', height: '80px', borderRadius: '50%'}}
                                            />
                                            : <img src="assets/images/no-photo.png"
                                                   alt={user.name}
                                                   style={{width: '80px', height: '80px', borderRadius: '50%'}}
                                            />
                                    }
                                </div>
                                <div>
                                    <p style={{color: '#707070', paddingLeft: '5px'}}>{user.name}&nbsp;{user.surname}</p>
                                </div>
                            </div>
                            <div className={'d-flex align-items-center'}>
                                <img src="assets/icons/quote.png" alt="quote"/>
                                <img src="assets/icons/quote.png" alt="quote"/>
                            </div>
                        </div>
                        : null
                }
                <div className={styles.footer}>
                    <p style={{color: '#707070'}}>{review.review}</p>
                </div>
            </div>
        </div>
    )
}

export default Review