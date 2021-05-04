import React, {useState} from 'react'
import styles from './auth.module.css'
import {Link} from 'react-router-dom'
import {Formik} from 'formik';
import studentValidator from "./validators/studentValidator";
import axios from "axios";
import keys from "../../keys";

const Student = () => {
    let [show, setShow] = useState(false)
    let [agree, setAgree] = useState(false)

    const ValidationSchema = studentValidator

    return (
        <>
            <Formik
                initialValues={{name: '', surname: '', email: '', password: '', phone: '', confirm: ''}}
                validationSchema={ValidationSchema}
                onSubmit={values => {
                    values['role'] = 'student'
                    axios.post(`${keys.BACKEND_URI}/auth/register`, values)
                        .then(res => {
                            let localItem = {id: res.data.data.id, token: res.data.token}
                            console.log(JSON.stringify(res.data.token))
                            localStorage.setItem(keys.AUTH, JSON.stringify(localItem))
                            window.location.href = '/profile'
                        })
                        .catch(e => {
                            alert('Սխալ տվյալների մուտքագրում')
                        })
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} className={`${styles.form} mb-3 p-5`}>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type="text"
                                   className={
                                       `form-control pl-5 
                                        ${errors.name && touched.name ? styles.inputError : null}`
                                   }
                                   name={'name'}
                                   placeholder={'Անուն'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}

                            />
                            <img src="assets/icons/user.svg" alt="user" className={styles.inputLeftIcon}/>
                            {touched.name && errors.name && <small className={'text-danger'}>{errors.name}</small>}
                        </div>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type="text"
                                   className={
                                       `form-control pl-5 
                                        ${errors.surname && touched.surname ? styles.inputError : null}`
                                   }
                                   name={'surname'}
                                   placeholder={'Ազգանուն'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.surname}
                            />
                            <img src="assets/icons/user.svg" alt="user" className={styles.inputLeftIcon}/>
                            {touched.surname && errors.surname &&
                            <small className={'text-danger'}>{errors.surname}</small>}
                        </div>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type="email"
                                   className={
                                       `form-control pl-5 
                                        ${errors.email && touched.email ? styles.inputError : null}`
                                   }
                                   name={'email'}
                                   placeholder={'Էլ. հասցե'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                            <img src="assets/icons/envelope.svg" alt="envelope" className={styles.inputLeftIcon}/>
                            {touched.email && errors.email && <small className={'text-danger'}>{errors.email}</small>}
                        </div>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type="number"
                                   className={
                                       `form-control pl-5 
                                        ${errors.phone && touched.phone ? styles.inputError : null}`
                                   }
                                   name={'phone'}
                                   placeholder={'Բջջային համար'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.phone}
                            />
                            <img src="assets/icons/phone.svg" alt="phone" className={styles.inputLeftIcon}/>
                            {touched.phone && errors.phone && <small className={'text-danger'}>{errors.phone}</small>}
                        </div>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type={show ? 'text' : 'password'}
                                   className={
                                       `form-control pl-5 
                                        ${errors.password && touched.password ? styles.inputError : null}`
                                   }
                                   name={'password'}
                                   placeholder={'Գաղտնաբառ'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                            <img src="assets/icons/lock.svg" alt="lock" className={styles.inputLeftIcon}/>
                            <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                                 alt="eyes"
                                 className={styles.inputRightIcon}
                                 onClick={() => setShow(show = !show)}
                            />
                            {touched.password && errors.password &&
                            <small className={'text-danger'}>{errors.password}</small>}
                        </div>
                        <div className="form-group" style={{position: 'relative'}}>
                            <input type={show ? 'text' : 'password'}
                                   className={
                                       `form-control pl-5 
                                        ${errors.confirm && touched.confirm ? styles.inputError : null}`
                                   }
                                   name={'confirm'}
                                   placeholder={'Կրկնել գաղտնաբառը'}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.confirm}
                            />
                            <img src="assets/icons/lock.svg" alt="lock" className={styles.inputLeftIcon}/>
                            <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                                 alt="eyes"
                                 className={styles.inputRightIcon}
                                 onClick={() => setShow(show = !show)}
                            />
                            {touched.confirm && errors.confirm &&
                            <small className={'text-danger'}>{errors.confirm}</small>}
                        </div>
                        <div className={`${styles.formBody} mt-4`}>
                            <input type="checkbox"
                                   name="agree"
                                   onChange={() => setAgree(!agree)}
                                   onBlur={handleBlur}
                                // value={values.remember}
                            />
                            <span className={'pl-3'}>Ես համաձայն եմ վաճառքի պայմաններին, գաղտնիության և անձնական տվյալների քաղաքականությանը։</span>
                        </div>
                        <div className={'d-flex justify-content-center mt-4'}>
                            <button className={`btn ${styles.formBtn}`}
                                    type={'submit'}
                                    disabled={agree ? null : 'disabled'}
                            >
                                Գրանցվել
                            </button>
                        </div>
                        <div className={'d-flex justify-content-center mt-4'}>
                            <Link to={'/login'}>Արդեն ունեք հաշիվ։ Մուտք գործել</Link>
                        </div>
                    </form>
                )}
            </Formik>
        </>

    )
}


export default Student