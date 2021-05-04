import React from 'react'
import styles from "../Room/room.module.css";
import RatingItem from "./RatingItem";

const Ratings = () => {
    let ratingItems = [
        {
            id: 1,
            student: {name: 'Քրիստինե', surname: 'Կառլենյան', image: 'assets/images/teacher-1.png'},
            review: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ \n' +
                'ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար',
            rate: 5
        },
        {
            id: 2,
            student: {name: 'Կարեն', surname: 'Կարապետյան', image: 'assets/images/teacher-2.png'},
            review: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ \n' +
                'ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար',
            rate: 4
        },
        {
            id: 3,
            student: {name: 'Մարինե', surname: 'Սանոսյան', image: 'assets/images/teacher-1.png'},
            review: 'Ուսուցման որակը բարձր է ։Անչափ շնորհակալ \n' +
                'ենք ստացած գիտելիքի համար:Ուսուցման որակը բարձր է ։Անչափ շնորհակալ ենք ստացած գիտելիքի համար',
            rate: 3
        },
    ]

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
                        ratingItems.map(ratingItem => <RatingItem key={ratingItem.id} ratingItem={ratingItem}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ratings