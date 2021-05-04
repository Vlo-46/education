import React from 'react'
import styles from './advantage.module.css'

const Advantage = () => {
    return (
        <section className='mt-2 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Մեր առավելությունները</h4>
            <p className={styles.subTitle}>Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեր համար</p>
            <div className={styles.imgBox}>
                <img src="assets/icons/trophy.png" alt="trophy"/>
            </div>
        </section>
    )
}

export default Advantage