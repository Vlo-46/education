import React from 'react'
import styles from './about_page.module.css'

const AboutPageSection3 = () => {
    return (
        <section className="p-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.section_1_info} p-5`}>
                        <p className={styles.title}>Հեռավար ուսուիցման առավելությունները</p>
                        <p className={styles.subTitle}>Խնայիր ժամանակդ</p>
                        <p className={styles.description}>
                            Մենք համագործակցում ենք միայն բարձր որոկավորում ունեցող մասնագետների հետ որոնք կմշակեն
                            լավագույն պլանը Ձեզ համար:
                        </p>
                        <div className="form-group">
                            <p className={styles.progressTitle}><span>Արդյունավետություն</span><span>80%</span></p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80"
                                     aria-valuemin="0" aria-valuemax="100" data-aos="fade-right"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <p className={styles.progressTitle}><span>Արդիականություն</span><span>90%</span></p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90"
                                     aria-valuemin="0" aria-valuemax="100" data-aos="fade-right"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6" data-aos="zoom-in-left">
                    <div className={`${styles.section_1_imgField} p-5`}>
                        <img
                            src="https://matthewboyce.files.wordpress.com/2013/04/office-communication.jpg"
                            className={styles.wrapperImg}
                            alt=""
                        />
                        <div className={styles.childBox2}>
                            <div className={styles.firstChild}><img src="assets/icons/heart.png" alt=""/></div>
                            <div>
                                <p style={{color: '#0B2E99'}}>Խնայիր ժամանակդ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPageSection3