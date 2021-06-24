import React, {useState} from 'react'
import styles from './contact.module.css'
import {useTranslation} from "react-i18next";
// import Particle from "../Particles/Particle";

const Contact = () => {
    const [values, setValues] = useState({})

    const {t, i18n} = useTranslation();

    let GET_VALUES = e => {
        values[e.target.name] = e.target.value;
        setValues(values)
    }

    let SEND_VALUES = e => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <section className='mt-2 p-5 position-relative' style={{backgroundColor: '#fff'}}>
            <h4 className={`text-center mb-3 title_text_wrapper`}>ԻՆչպես կապնվել մեզ հետ</h4>
            <div className="container">
                <div className={`${styles.contactField} mt-5`}>
                    <form className={styles.form} onChange={GET_VALUES}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label htmlFor="name">Անուն</label>
                                <input type="text" className="form-control" name='name'/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label htmlFor="surname">Ազգանուն</label>
                                <input type="text" className="form-control" name='surname'/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label htmlFor="phone">Հեռախոս</label>
                                <input type="text" className="form-control" name='phone' placeholder='+374'/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <label htmlFor="email">էլ-հասցե</label>
                                <input type="text" className="form-control" name='email'/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="message">Ձեր հաղորդագրությունը</label>
                            <textarea name="message" className="form-control"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className={`${styles.btn} btn`}
                                    type={'submit'}
                                    onClick={SEND_VALUES}
                            >
                                Ուղարկել
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact