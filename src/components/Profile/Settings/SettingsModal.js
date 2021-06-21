import React, {useState} from 'react'
import styles from './settings.module.css'
import axios from "axios";
import keys from "../../../keys";
import Swal from "sweetalert2";
import {Formik} from "formik";
import * as Yup from 'yup';

const SettingsModal = ({type, CLOSE_MODAL}) => {
    const [accountPassword, setAccountPassword] = useState('')
    let [show, setShow] = useState(false)


    let GET_ACCOUNT_PASSWORD = e => {
        setAccountPassword(e.target.value)
    }

    let DELETE_ACCOUNT = e => {
        let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
        e.preventDefault()
        axios.post(`${keys.BACKEND_URI}/auth/delete_account`, {password: accountPassword}, {
            headers: {
                Authorization: `Bearer ${candidate.token}`
            }
        })
            .then(res => {
                if (res.data.msg == 'ok') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        timer: 1500
                    })
                    localStorage.removeItem(keys.AUTH)
                    window.location.href = '/'
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        timer: 1500
                    })
                }

            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    timer: 1500
                })
            })
    }

    let ValidationSchema = Yup.object().shape({
        password: Yup.string()
            .required("Նշված դաշտը պարտադիր է")
            .min(8, 'Գաղտնաբառը պետք է լինի 8 նիշից ոչ պակաս')
            .max(50, 'Գաղտնաբառը պետք է լինի 50 նիշից ոչ ավել')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                "Գաղտնաբառը պետք է պարունակի մեծատառ և փոքրատառ սիմվոլ, և թիվ"
            ),
    });

    return (
        <div className={styles.modalWindow}>
            <div className="modal-dialog">
                {
                    type === 'password'
                        ? <div className="modal-content" id={'passwordField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Փոխել գաղտնաբառը</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <Formik
                                    initialValues={{password: '', oldPassword: ""}}
                                    validationSchema={ValidationSchema}
                                    onSubmit={values => {
                                        console.log(values)
                                        let candidate = JSON.parse(localStorage.getItem(keys.AUTH))
                                        axios.post(`${keys.BACKEND_URI}/auth/change_password`, values, {
                                            headers: {
                                                Authorization: `Bearer ${candidate.token}`
                                            }
                                        })
                                            .then(res => {
                                                if (res.data.msg == 'ok') {
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Success',
                                                        timer: 1500
                                                    })
                                                    CLOSE_MODAL(null)
                                                } else {
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Something went wrong!',
                                                        timer: 1500
                                                    })
                                                }

                                            })
                                            .catch(e => {
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'Something went wrong!',
                                                    timer: 1500
                                                })
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
                                        <form onSubmit={handleSubmit} className={`mb-3 p-5`}>
                                            <div className="form-group" style={{position: 'relative'}}>
                                                <input type={show ? 'text' : 'password'}
                                                       className="form-control pl-5 "
                                                       name={'oldPassword'}
                                                       placeholder={'Ընթացիկ գաղտնաբառ'}
                                                       onChange={handleChange}
                                                       onBlur={handleBlur}
                                                       value={values.oldPassword}
                                                />
                                                <img src="assets/icons/lock.svg" alt="lock"
                                                     className={styles.inputLeftIcon}/>
                                                <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                                                     alt="eyes"
                                                     className={styles.inputRightIcon}
                                                     onClick={() => setShow(show = !show)}
                                                />
                                            </div>
                                            <div className="form-group" style={{position: 'relative'}}>
                                                <input type={show ? 'text' : 'password'}
                                                       className={
                                                           `form-control pl-5 
                                        ${errors.password && touched.password ? styles.inputError : null}`
                                                       }
                                                       name={'password'}
                                                       placeholder={'Նոր գաղտնաբառ'}
                                                       onChange={handleChange}
                                                       onBlur={handleBlur}
                                                       value={values.password}
                                                />
                                                <img src="assets/icons/lock.svg" alt="lock"
                                                     className={styles.inputLeftIcon}/>
                                                <img src={show ? 'assets/icons/eyes.svg' : 'assets/icons/hide.svg'}
                                                     alt="eyes"
                                                     className={styles.inputRightIcon}
                                                     onClick={() => setShow(show = !show)}
                                                />
                                                {touched.password && errors.password &&
                                                <small className={'text-danger'}>{errors.password}</small>}
                                            </div>
                                            <button type="button"
                                                    className="btn btn-secondary"
                                                    onClick={() => CLOSE_MODAL(false)}
                                            >
                                                Փակել
                                            </button>
                                            <button type="submit"
                                                    className="btn btn-primary ml-2"
                                            >
                                                Պահպանել
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        : null
                }
                {
                    type === 'account'
                        ? <form className="modal-content" id={'accountField'}>
                            <div className="modal-header">
                                <h5 className="modal-title">Ջնջել հաշիվը</h5>
                                <button type="button"
                                        className="btn"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <p style={{textAlign: "center", color: "red"}}>ՀԻՇԵՑՈՒՄ</p>
                                    <p style={{textAlign: "center", color: "red", fontSize: "small"}}>Հաշիվը ջնջելուց հետո
                                        տվյալները
                                        վերականգնել հնարավոր չէ։</p>
                                    <div className="form-group">
                                        <label htmlFor="password">Ընթացիկ գաղտնաբառը</label>
                                        <input type="password"
                                               className="form-control"
                                               name={'password'}
                                               onChange={GET_ACCOUNT_PASSWORD}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                        className="btn btn-secondary"
                                        onClick={() => CLOSE_MODAL(false)}
                                >
                                    Փակել
                                </button>
                                <button type="submit"
                                        className="btn btn-primary"
                                        onClick={DELETE_ACCOUNT}
                                >
                                    Ջնջել
                                </button>
                            </div>
                        </form>
                        : null
                }
            </div>
        </div>
    )
}

export default SettingsModal