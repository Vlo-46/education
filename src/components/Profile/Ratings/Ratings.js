import React from 'react'
import styles from "../Room/room.module.css";
import RatingItem from "./RatingItem";
import {useSelector} from "react-redux";

const Ratings = () => {
    let reviews = useSelector(state => state.profile.teacherReview)

    return (
        <div className={'p-4'}>
            <p style={{fontSize: '18px', color: '#061358'}}>Վարկանիշ</p>
            <div className="room_box table-responsive">
                <table className={`table table-hover ${styles.table}`}>
                    <thead>
                    <tr>
                        <th scope="col">Ուսանող</th>
                        <th scope="col">Կարծիք</th>
                        <th scope="col">Վարկանիշ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reviews.length
                            ? reviews.map(review => <RatingItem key={review.id} review={review}/>)
                            : null
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ratings