import React from 'react'
import styles from "./section.module.css";
// import Particle from "../Particles/Particle";

const InfoSection2 = () => {
    let steps = [
        {
            id: 1,
            title: 'Մենք Կարևորում ենք',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/trophy.png'
        },
        {
            id: 2,
            title: 'Մենք Կարևորում ենք',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/trophy.png'
        },
        {
            id: 3,
            title: 'Մենք Կարևորում ենք',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/trophy.png'
        },
    ]

    return (
        <section className='mt-2 p-5 position-relative' style={{backgroundColor: '#fff'}}>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className={styles.step}
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >
                                <div>
                                    <img src={steps[0].image}
                                         className={`mb-2 ${styles.stepImg}`}
                                         alt={steps[0].image}
                                    />
                                    <p className={styles.stepText1}>{steps[0].title}</p>
                                    <p className={styles.stepText2}>{steps[0].description}</p>
                                </div>
                                <div className={styles.stepNumber}>
                                    1
                                </div>
                            </div>
                            <div className={`${styles.step} mt-3`}
                                 data-aos="fade-right"
                                 data-aos-offset="300"
                                 data-aos-easing="ease-in-sine"
                            >
                                <div>
                                    <img src={steps[1].image}
                                         className={`mb-2 ${styles.stepImg}`}
                                         alt={steps[1].image}
                                    />
                                    <p className={styles.stepText1}>{steps[1].title}</p>
                                    <p className={styles.stepText2}>{steps[1].description}</p>
                                </div>
                                <div className={styles.stepNumber}>
                                    3
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                                <div className={`${styles.step}`}
                                     data-aos="fade-right"
                                     data-aos-offset="300"
                                     data-aos-easing="ease-in-sine"
                                >
                                    <div>
                                        <img src={steps[2].image}
                                             className={`mb-2 ${styles.stepImg}`}
                                             alt={steps[2].image}
                                        />
                                        <p className={styles.stepText1}>{steps[2].title}</p>
                                        <p className={styles.stepText2}>{steps[2].description}</p>
                                    </div>
                                    <div className={styles.stepNumber}>
                                        2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className={styles.wrapperRightBox}>
                        <div className={styles.imgBox}>
                            <img
                                src="https://www.firestock.ru/download/s/pj99l7bunyyvax7/2625bb25_shutterstock_207349507.xxxlarge_2x.jpg?dl=0"
                                alt="https://www.firestock.ru/download/s/pj99l7bunyyvax7/2625bb25_shutterstock_207349507.xxxlarge_2x.jpg?dl=0"
                            />
                        </div>
                        <div className={`${styles.childBox1} flex-column`} style={{width: '200px'}}>
                            <div style={{padding: '10px', backgroundColor: '#000D83', borderRadius: '5px'}}><img
                                src="assets/icons/heart.png" alt=""/></div>
                            <div><p style={{color: '#0B2E99'}}>Լավագույն դասընթացը</p></div>
                        </div>
                        <div className={styles.childBox2}>
                            <div className={'mb-2'}>
                                <img src="https://i.pinimg.com/originals/f7/85/10/f78510d0487088afb50abd9eedd477a1.jpg"
                                     alt="https://i.pinimg.com/originals/f7/85/10/f78510d0487088afb50abd9eedd477a1.jpg"
                                     style={{width: '50px', height: '50px', borderRadius: '50%'}}
                                />
                            </div>
                            <div><span>Սովորիր անգլերեն</span></div>
                            <div>
                                <p style={{color: '#6E7180'}}>
                                    Մենք համագործակցում ենք միայն բարձր որոկավորում ունեցող մասնագետների հետ որոնք
                                    կմշակի լավագույն պլանը Ձեզ համար
                                </p>
                            </div>
                            <div className={styles.starField}>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                                <img src="assets/icons/star.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Particle/>*/}
        </section>
    )
}

export default InfoSection2