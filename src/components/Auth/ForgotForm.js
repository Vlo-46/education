import React from 'react'
import styles from './auth.module.css'
import {Link} from 'react-router-dom'

const ForgotForm = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.formField} mt-5 mb-5`}>
                <h5 className={'text-center'}>Մոռացել եմ գաղտնաբառը </h5>
                <p className={'pl-5 pr-5 pt-3'}>Մուտքագրեք ձեր էլ․ Փոստը՝ ձեր գաղթնաբառը վերականգնելու համար </p>
                <form className={`${styles.form} mb-3 p-5`}>
                    <div className="form-group" style={{position: 'relative'}}>
                        <input type="email"
                               className="form-control pl-5"
                               name={'email'}
                               placeholder={'Էլ. հասցե'}
                        />
                        <img src="assets/icons/envelope.svg" alt="envelope" className={styles.inputLeftIcon}/>
                    </div>
                    <div className={'d-flex justify-content-center mt-4'}>
                        <button className={`btn ${styles.formBtn}`}>
                            Ուղարկել
                        </button>
                    </div>
                    <div className={'d-flex justify-content-center mt-4'}>
                        <Link to={'/login'}>Արդեն ունեք հաշիվ։ Մուտք գործել</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotForm