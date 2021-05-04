import React from 'react'
import styles from './section.module.css'

const InfoSection1 = () => {
    let steps = [
        {
            id: 1,
            title: 'Ստեղծել հաշիվ',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/step-1.png'
        },
        {
            id: 2,
            title: 'Ընտրել լեզուն',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/step-2.png'
        },
        {
            id: 3,
            title: 'Ստուգիր գիտելիքիդ աստիճանը',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/step-3.png'
        },
        {
            id: 4,
            title: 'Դու պատրաստ ես',
            description: 'Մենք համագործակցում ենք միայն բարձր որակավորում ունեցող մասնագետների հետ որոնք կմշակեն լավագույն պլանը ձեզ համար',
            image: 'assets/icons/step-4.png'
        },
    ]

    return (
        <section className='mt-2 p-5' style={{backgroundColor: '#F1F5FC'}}>
            <p style={{color: '#5BCCFF'}}>Լավագույն ընտրությունը</p>
            <h4 className={`mb-3 title_text_wrapper`}>Ինչպես մասնակցել մեր դասընթացներին</h4>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                    <div className={styles.wrapperRightBox}>
                        <div className={styles.imgBox}>
                            <img
                                src="https://img.freepik.com/free-photo/front-view-smiley-elegant-businesswoman-using-laptop-with-copy-space_23-2148788848.jpg?size=626&ext=jpg"
                                alt="info"
                            />
                        </div>
                        <div className={styles.childBox1}>
                            <div><img src="assets/icons/check.png" alt=""/></div>
                            <div><p style={{color: '#0B2E99'}}>Լավագույն դասընթացը</p></div>
                        </div>
                        <div className={styles.childBox2}>
                            <div className={'mb-2'}>
                                <img src="https://i.pinimg.com/originals/f7/85/10/f78510d0487088afb50abd9eedd477a1.jpg"
                                     alt="info"
                                     style={{width: '50px', height: '50px', borderRadius: '50%'}}
                                />
                            </div>
                            <div><span>Սոնա Սիմոնյան</span></div>
                            <div><p>Անգլերենի մասնագետ</p></div>
                            <div className={styles.starField}>
                                <img src="assets/icons/star.png" alt="img"/>
                                <img src="assets/icons/star.png" alt="img"/>
                                <img src="assets/icons/star.png" alt="img"/>
                                <img src="assets/icons/star.png" alt="img"/>
                                <img src="assets/icons/star.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                    <div className="row">
                        {
                            steps.map((step, index) => (
                                <div className="col-md-6 mb-3" key={step.id}
                                     data-aos="flip-left"
                                     data-aos-easing="ease-out-cubic"
                                     data-aos-duration="2000"
                                >
                                    <div className={styles.step}>
                                        <div>
                                            <img src={step.image}
                                                 className={`mb-2 ${styles.stepImg}`}
                                                 alt={step.image}
                                            />
                                            <p className={styles.stepText1}>{step.title}</p>
                                            <p className={styles.stepText2}>{step.description}</p>
                                        </div>
                                        <div className={styles.stepNumber}>
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection1