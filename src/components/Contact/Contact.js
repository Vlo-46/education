import React from 'react'
import styles from './contact.module.css'
// import Particle from "../Particles/Particle";

const Contact = () => {
    return (
        <section className='mt-2 p-5 position-relative' style={{backgroundColor: '#fff'}}>
            <h4 className={`text-center mb-3 title_text_wrapper`}>ԻՆչպես կապնվել մեզ հետ</h4>
            <div className="container">
                <div className={`${styles.contactField} mt-5`}>
                    <form className={styles.form}>
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
                            <button className={`${styles.btn} btn`}>Ուղարկել</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact