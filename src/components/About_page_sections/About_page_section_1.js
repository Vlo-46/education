import React from 'react'
import styles from './about_page.module.css'

const AboutPageSection1 = () => {
    return (
        <section className='mt-5 p-5'>
            <h4 className={`text-center mb-3 title_text_wrapper`}>Մեր մասին</h4>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.section_1_info} p-5`}>
                        <p className={styles.title}>Մի փոքր մեր մասին</p>
                        <p className={styles.subTitle}>Վերնագիր</p>
                        <p className={styles.description}>
                            Մենք համագործակցում ենք միայն բարձր որոկավորում ունեցող մասնագետների հետ որոնք կմշակեն
                            լավագույն պլանը Ձեզ համար:
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur ducimus esse illum
                            incidunt nihil quam voluptatibus? Asperiores aspernatur aut esse, harum id in iste laborum
                            modi nam totam. Commodi consequatur eligendi laboriosam laborum minus quasi quo. Ad
                            delectus, excepturi facere labore molestiae numquam perferendis rem saepe vero voluptate
                            voluptatum.
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6" data-aos="zoom-in-left">
                    <div className={`${styles.section_1_imgField} p-5`}>
                        <img src="https://i1.wp.com/hr-gazette.com/wp-content/uploads/2018/10/bigstock-196164373.jpg?fit=1600%2C928&ssl=1"
                             className={styles.wrapperImg}
                             alt=""
                        />
                        <div className={styles.childBox1} >
                            <div><img src="assets/icons/check.png" alt=""/></div>
                            <div><p style={{color: '#0B2E99'}}>Լավագույն դասընթացը</p></div>
                        </div>
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

export default AboutPageSection1