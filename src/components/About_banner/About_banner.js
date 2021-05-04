import React from 'react'
import styles from './about_banner.module.css'

const AboutBanner = () => {
    return (
        <section style={{backgroundImage: "url('assets/images/about-banner.jpg')"}} className={styles.banner}>
            <div className="row p-5 no-gutters">
                <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <p className={styles.bannerTitle}>Մեր մասին</p>
                    <p className={styles.subTitle}>
                        Մենք համագործակցում ենք միայն բարձր որոկավորում ունեցող մասնագետների հետ
                    </p>
                    <button className={`btn mt-3 ${styles.bannerBtn}`}>Գրանցվել</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className={`${styles.statistics} mt-5`}>
                        <div className="d-flex justify-content-between mb-3 align-items-center">
                            <p>Պարտաճանաչություն</p>
                            <img src="assets/icons/arrow-down-image.png" alt=""/>
                        </div>
                        <div className="d-flex justify-content-between mb-3 align-items-center">
                            <p>Արդյունավերություն</p>
                            <img src="assets/icons/arrow-down-image.png" alt=""/>
                        </div>
                        <div className="d-flex justify-content-between mb-3 align-items-center">
                            <p>Փորձառություն</p>
                            <img src="assets/icons/arrow-down-image.png" alt=""/>
                        </div>
                        <div className="d-flex justify-content-between mb-3 align-items-center">
                            <p>Հաղորդունակություն</p>
                            <img src="assets/icons/arrow-down-image.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutBanner