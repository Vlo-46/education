import React from 'react'
import styles from './reviews.module.css'

const Review = () => {
    return (
        <div className={'p-3'}>
            <div className={`${styles.review} p-5`}>
                <div className={`${styles.header}`}>
                    <div className={'d-flex align-items-center'}>
                        <div>
                            <img
                                src="https://image.freepik.com/free-photo/the-charming-girl-stands-on-the-street_8353-5372.jpg"
                                style={{width: '80px', height: '80px', borderRadius: '50%'}}
                                alt={'img'}
                            />
                        </div>
                        <div>
                            <p style={{color: '#707070', paddingLeft: '5px'}}>Աննա Գրիգորյան</p>
                        </div>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <img src="assets/icons/quote.png" alt="quote"/>
                        <img src="assets/icons/quote.png" alt="quote"/>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p style={{color: '#707070'}}>
                        Ուսուցման որակը բարձր է ։Անչափ շնորհակալ
                        ենք ստացած գիտելիքի համար:Ուսուցման որակը
                        բարձր է ։Անչափ շնորհակալ ենք ստացած
                        գիտելիքի համար
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review