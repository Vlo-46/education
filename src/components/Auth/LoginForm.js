import React, {useState} from 'react'
import styles from './auth.module.css'
import {Link} from 'react-router-dom'
import axios from "axios";
import keys from "../../keys";

const LoginForm = () => {
    let [show, setShow] = useState(false)
    let [values, setValues] = useState({})
    let [error, setError] = useState(false)

    let GET_VALUES = e => {
        values[e.target.name] = e.target.value;
        setValues(values)
    }

    let LOGIN_HANDLER = e => {
        e.preventDefault()
        axios.post(`${keys.BACKEND_URI}/auth/login`, values)
            .then(res => {
                if (res.data.msg) {
                    setError(true)
                } else {
                    let auth = {
                        id: res.data.candidate.id,
                        token: res.data.token
                    }
                    // console.log(res.data.token)
                    localStorage.setItem(keys.AUTH, JSON.stringify(auth))
                    window.location.href = '/profile'
                }
            })
            .catch(e => {
                setError(true)
            })
    }

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.formField} mt-5 mb-5`}>
                <h5 className={'text-center'}>Մուտք</h5>
                <div className={`${styles.auth} mb-3 mt-5`}>
                    <div><img src="assets/icons/1816.svg" alt=""/></div>
                    <div><img src="assets/icons/1817.svg" alt=""/></div>
                    <div><img src="assets/icons/1824.svg" alt=""/></div>
                </div>
                <p className={'text-center'}>կամ մուտքագրեք Ձեր էլ․ հասցեն ։ </p>
                {
                    error
                        ? <div className="alert alert-danger" role="alert">
                            Սխալ մուտքային տվյալներ
                        </div>
                        : null
                }
                <form className={`${styles.form} mt-3 mb-3 p-5`} onChange={GET_VALUES}>
                    <div className="form-group" style={{position: 'relative'}}>
                        <input type="email"
                               className="form-control pl-5"
                               name={'email'}
                               placeholder={'Էլ. հասցե'}
                        />
                        <img src="assets/icons/envelope.svg" alt="envelope" className={styles.inputLeftIcon}/>
                    </div>
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
                    <div className={`${styles.formBody} mt-4`}>
                        <div>
                            <input type="checkbox" name="remember"/>
                            &nbsp;
                            <span>Հիշել</span>
                        </div>
                        <div>
                            <Link to={'/forgot-password'}>Մոռացե՞լ եք գաղտնաբառը</Link>
                        </div>
                    </div>
                    <div className={'d-flex justify-content-center mt-4'}>
                        <button className={`btn ${styles.formBtn}`}
                                type={'submit'}
                                onClick={LOGIN_HANDLER}
                        >
                            Մուտք
                        </button>
                    </div>
                    <div className={'d-flex justify-content-center mt-4'}>
                        <Link to={'/register'}>Դեռ հաշիվ չունե՞ք։Ստեղծել հաշիվ</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm