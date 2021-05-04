import React, {useState} from 'react'
import styles from './auth.module.css'
import {Link} from 'react-router-dom'

const NewPasswordForm = () => {
    let [show, setShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.formField} mt-5 mb-5`}>
                <h5 className={'text-center'}>Նոր գաղտնաբառ</h5>
                <form className={`${styles.form} mb-3 p-5`}>
                    <div className="form-group" style={{position: 'relative'}}>
                        <input type={show ? 'text' : 'password'}
                               className="form-control pl-5"
                               name={'password'}
                               placeholder={'Գաղտնաբառ'}
                        />
                        <img src="assets/icons/lock.svg" alt="lock" className={styles.inputLeftIcon}/>
                        <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                             alt="eyes"
                             className={styles.inputRightIcon}
                             onClick={() => setShow(show = !show)}
                        />
                    </div>
                    <div className="form-group" style={{position: 'relative'}}>
                        <input type={show ? 'text' : 'password'}
                               className="form-control pl-5"
                               name={'confirm'}
                               placeholder={'Կրկնել գաղտնաբառը'}
                        />
                        <img src="assets/icons/lock.svg" alt="lock" className={styles.inputLeftIcon}/>
                        <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                             alt="eyes"
                             className={styles.inputRightIcon}
                             onClick={() => setShow(show = !show)}
                        />
                    </div>
                    <div className={'d-flex justify-content-center mt-4'}>
                        <button className={`btn ${styles.formBtn}`}>
                            Մուտք
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

export default NewPasswordForm